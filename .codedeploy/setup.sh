#!/bin/bash
echo `date '+%Y-%m-%d %H:%M:%S'` >> /var/log/deploydates.log

# Create
mkdir -p /home/ec2-user/bucketful

# install meteor
curl "https://install.meteor.com/?release=1.6.1" | /bin/sh

# install docker and docker-compose
sudo yum install docker
sudo pip install docker-compose

