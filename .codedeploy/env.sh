#!/bin/bash

export DEPLOYMENT_GROUP_NAME=$DEPLOYMENT_GROUP_NAME
export CODEDEPLOY=/home/ec2-user/bucketful_groups/$DEPLOYMENT_GROUP_NAME/.codedeploy/
export DOCKERCOMPOSEPATH=/usr/local/bin/docker-compose

if [ "$DEPLOYMENT_GROUP_NAME" == "dev" ]
then
    export PORT=3030
elif [ "$DEPLOYMENT_GROUP_NAME" == "master" ]
then
    export PORT=80
elif [ "$DEPLOYMENT_GROUP_NAME" == "codedeploy" ]
then
    export PORT=4000
fi
