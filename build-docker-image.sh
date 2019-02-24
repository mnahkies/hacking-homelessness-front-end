#!/usr/bin/env bash

ng build -c production

REGISTRY=316662181545.dkr.ecr.eu-central-1.amazonaws.com/production
IMAGE_NAME=pie
TAG=$1

docker build -f run-environment.dockerfile ./dist/team-one --tag ${REGISTRY}/${IMAGE_NAME}:${TAG}
docker push ${REGISTRY}/${IMAGE_NAME}:${TAG}

