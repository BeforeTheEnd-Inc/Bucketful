#!/bin/bash
echo `date '+%Y-%m-%d %H:%M:%S` >> /home/ec2-user/deploydates.log
echo "deploying from $TRAVIS_BRANCH" >> /home/ec2-user/deploydates.log 

# create
mkdir -p /home/ec2-user/bucketful
chown -R ec2-user:ec2-user /home/ec2-user/bucketful

# install meteor
curl "https://install.meteor.com/?release=1.6.1" | /bin/sh

# install docker and docker-compose
sudo yum install docker
sudo pip install docker-compose

