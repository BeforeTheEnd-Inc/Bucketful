#!/bin/bash
source .codedeploy/env.sh

echo `date '+%Y-%m-%d %H:%M:%S'` - setup.sh - starting aws codedeploy >> /home/ec2-user/deploydates.log
echo `date '+%Y-%m-%d %H:%M:%S'` - setup.sh - deploying to [$DEPLOYMENT_GROUP_NAME] group >> /home/ec2-user/deploydates.log
echo `date '+%Y-%m-%d %H:%M:%S'` - `basename "$0"` - PORT=$PORT , >> /home/ec2-user/deploydates.log
echo `date '+%Y-%m-%d %H:%M:%S'` - `basename "$0"` - DOCKERCOMPOSEPATH=$DOCKERCOMPOSEPATH , >> /home/ec2-user/deploydates.log



# create bucketful directory
mkdir -p /home/ec2-user/bucketful_groups/$DEPLOYMENT_GROUP_NAME

# install meteor
curl "https://install.meteor.com/?release=1.6.1" | /bin/sh

# install docker and docker-compose
sudo yum -y install docker
sudo pip install docker-compose

# start docker daemon
sudo service docker start
