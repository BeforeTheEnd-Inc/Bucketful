#!/bin/bash

echo `date '+%Y-%m-%d %H:%M:%S'` - `basename "$0"` - starting aws codedeploy >> /home/ec2-user/deploydates.log
echo `date '+%Y-%m-%d %H:%M:%S'` - `basename "$0"` - deploying to [$DEPLOYMENT_GROUP_NAME] group >> /home/ec2-user/deploydates.log
echo `date '+%Y-%m-%d %H:%M:%S'` - start_bucketful.sh - DEPLOYMENT_GROUP_NAME is [$DEPLOYMENT_GROUP_NAME] >> /home/ec2-user/deploydates.log


CODEDEPLOY_DIR=/home/ec2-user/bucketful_groups/$DEPLOYMENT_GROUP_NAME/.codedeploy
DOCKERCOMPOSEPATH=/usr/local/bin/docker-compose

if [ "$DEPLOYMENT_GROUP_NAME" == "dev" ]
then
    PORT=3030
elif [ "$DEPLOYMENT_GROUP_NAME" == "master" ]
then
    PORT=80
elif [ "$DEPLOYMENT_GROUP_NAME" == "codedeploy" ]
then
    PORT=4000
fi

echo `date '+%Y-%m-%d %H:%M:%S'` - start_bucketful.sh - PORT value set to [ $PORT ] >> /home/ec2-user/deploydates.log


cp -rp /home/ec2-user/bucketful_groups/.holding/. /home/ec2-user/bucketful_groups/$DEPLOYMENT_GROUP_NAME/
rm -rf /home/ec2-user/bucketful_groups/.holding/.
chown -R ec2-user:ec2-user /home/ec2-user/bucketful_groups/$DEPLOYMENT_GROUP_NAME

# templating
sed -i "s/DEPLOYMENT_GROUP_NAME/${DEPLOYMENT_GROUP_NAME}/g" $CODEDEPLOY_DIR/docker-compose.yaml
sed -i "s/PORT/${PORT}/g" $CODEDEPLOY_DIR/docker-compose.yaml

# stop current docker containers
sudo $DOCKERCOMPOSEPATH --file $CODEDEPLOY_DIR/docker-compose.yaml down

# update image
sudo docker pull beforetheend/bucketful:$DEPLOYMENT_GROUP_NAME

# run docker compose
sudo $DOCKERCOMPOSEPATH --file $CODEDEPLOY_DIR/docker-compose.yaml up -d
