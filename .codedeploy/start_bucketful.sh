#!/bin/bash

echo `date '+%Y-%m-%d %H:%M:%S'` - start_bucketful.sh - DEPLOYMENT_GROUP_NAME is [$DEPLOYMENT_GROUP_NAME] >> /home/ec2-user/deploydates.log

sed -i "s/IGIVEUP_THISISAHACK/$DEPLOYMENT_GROUP_NAME/g" /home/ec2-user/bucketful/.codedeploy/docker-compose.yaml

# run docker compose
sudo /usr/local/bin/docker-compose --file /home/ec2-user/bucketful/.codedeploy/docker-compose.yaml up -d
