#!/bin/bash

# create bucketful directory
mkdir -p /home/ec2-user/bucketful_groups/$DEPLOYMENT_GROUP_NAME

# install docker and docker-compose
sudo yum -y install docker
sudo pip install docker-compose

# start docker daemon
sudo service docker start
