#!/usr/bin/env bash

# This will cause the shell to exit immediately if a simple command exits with a nonzero exit value.
set -e

echo $TRAVIS_BRANCH

if [ -z "$TRAVIS_BRANCH" ]; then
    export BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
else
    export BRANCH=$TRAVIS_BRANCH

fi

echo "=> Running tests with mocha on  *$BRANCH* branch..."
meteor test --once --driver-package meteortesting:mocha
echo ""
echo "=> Starting build for the *$BRANCH* branch..."
meteor build --server-only --directory .build
echo "=> building docker image ..."
docker build -t beforetheend/bucketful:$BRANCH .
echo "=> start docker compose ..."
docker-compose up -d
echo "=> Hip hip hooray the app is running at: http://localhost:3030/"
