#!/bin/bash

echo `date '+%Y-%m-%d %H:%M:%S'` - start_bucketful.sh - DEPLOYMENT_GROUP_NAME is [$DEPLOYMENT_GROUP_NAME] >> /home/ec2-user/deploydates.log

sed -i "s/IGIVEUP_THISISAHACK/$DEPLOYMENT_GROUP_NAME/g" /home/ec2-user/bucketful_groups/$DEPLOYMENT_GROUP_NAME/.codedeploy/docker-compose.yaml


# if [ "$DEPLOYMENT_GROUP_NAME" == "dev" ]
# then
#     export PORT=3030
# elif [ "$DEPLOYMENT_GROUP_NAME" == "master" ]
# then
#     export PORT=80
# elif [ "$DEPLOYMENT_GROUP_NAME" == "codedeploy" ]
# then
#     export PORT=4000
# fi

echo `date '+%Y-%m-%d %H:%M:%S'` - start_bucketful.sh - PORT value set to [ $PORT ] >> /home/ec2-user/deploydates.log


cp -rp /home/ec2-user/bucketful_groups/.holding/. /home/ec2-user/bucketful_groups/$DEPLOYMENT_GROUP_NAME/
rm -rf /home/ec2-user/bucketful_groups/.holding/.
chown -R ec2-user:ec2-user /home/ec2-user/bucketful_groups/$DEPLOYMENT_GROUP_NAME



# stop current docker containers
sudo /usr/local/bin/docker-compose --file /home/ec2-user/bucketful/.codedeploy/docker-compose.yaml down

# update image
sudo docker pull beforetheend/bucketful:$DEPLOYMENT_GROUP_NAME

# run docker compose
sudo /usr/local/bin/docker-compose --file /home/ec2-user/bucketful_groups/$DEPLOYMENT_GROUP_NAME/.codedeploy/docker-compose.yaml up -d
