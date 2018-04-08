FROM node:8.9.4

# REF: Deploying a Meteor app with Passenger: https://www.phusionpassenger.com/library/walkthroughs/deploy/meteor/

# Install PGP key and adds HTTPS support for APT
RUN apt-get update \
  && DEBIAN_FRONTEND=noninteractive apt-get install -y net-tools dirmngr gnupg \
  && apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7 \
  && apt-get install -y apt-transport-https ca-certificates

# Add our APT rep
RUN sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger jessie main > /etc/apt/sources.list.d/passenger.list'
RUN apt-get update

# Install Passenger & check the install
RUN apt-get install -y passenger
RUN /usr/bin/passenger-config validate-install

# Cleanup! clear out the local repository of retrieved package files & state information about each package resource
RUN apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# Create bucektful user & application directory
RUN useradd bucketful -m -s /bin/bash
RUN mkdir -p /var/www/bucketful

# Add passsengerfile.json which contains the settings need for the app to run
WORKDIR /var/www/bucketful/bundle
COPY --chown=bucketful:bucketful Passengerfile.json .

# Get the bucketful application code to the Docker image
WORKDIR /var/www/bucketful
COPY --chown=bucketful:bucketful .build/ .

# Install npm packages
WORKDIR /var/www/bucketful/bundle/programs/server
RUN npm install

# Expose port 3000 to the world!
EXPOSE 3000

# Start passenger which starts the app
WORKDIR /var/www/bucketful/bundle
CMD passenger start
