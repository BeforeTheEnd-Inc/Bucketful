#!/usr/bin/env bash

export BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

echo ""
echo "=> Starting build for the *$BRANCH* branch..."
echo ""
echo "=> building meteor bundle ..."
meteor build --server-only --directory .build
echo ""
echo "=> building docker image ..."
docker build -t beforetheend/bucketful:$BRANCH .
echo ""
echo "=> start docker compose ..."
docker-compose up -d
echo ""
echo "=> Hip hip hooray the app is running at: http://localhost:3030/"
echo ""
