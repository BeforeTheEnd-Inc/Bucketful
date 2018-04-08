#!/bin/bash
echo `date '+%Y-%m-%d %H:%M:%S'` >> /var/log/deploydates.log

# install meteor
curl "https://install.meteor.com/?release=1.6.1" | /bin/sh


