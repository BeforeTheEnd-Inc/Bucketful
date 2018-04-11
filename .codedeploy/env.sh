#!/bin/bash
echo `date '+%Y-%m-%d %H:%M:%S'` - `basename "$0"` - $DEPLOYMENT_GROUP_NAME - "setting up env var" >> /home/ec2-user/deploydates.log

DEPLOYMENT_GROUP_NAME=$DEPLOYMENT_GROUP_NAME
CODEDEPLOY=/home/ec2-user/bucketful_groups/$DEPLOYMENT_GROUP_NAME/.codedeploy/
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

echo `date '+%Y-%m-%d %H:%M:%S'` - `basename "$0"` - $DEPLOYMENT_GROUP_NAME - "env setup complete" >> /home/ec2-user/deploydates.log
