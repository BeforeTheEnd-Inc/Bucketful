#!/bin/bash

echo `date '+%Y-%m-%d %H:%M:%S'` - start_bucketful.sh - DEPLOYMENT_GROUP_NAME is [$DEPLOYMENT_GROUP_NAME] >> /home/ec2-user/deploydates.log

sed -i "s/IGIVEUP_THISISAHACK/$DEPLOYMENT_GROUP_NAME/g" /home/ec2-user/bucketful/.codedeploy/docker-compose.yaml


if [ "$DEPLOYMENT_GROUP_NAME" == "dev" ]
then
    export PORT=3030
elif [ "$DEPLOYMENT_GROUP_NAME" == "master" ]
then
    export PORT=80
fi



# run docker compose
sudo /usr/local/bin/docker-compose --file /home/ec2-user/bucketful/.codedeploy/docker-compose.yaml up -d
