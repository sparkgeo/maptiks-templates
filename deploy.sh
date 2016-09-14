#! /bin/bash

BUCKET=$1
echo "Copy files to $BUCKET"
aws s3 sync dist/ s3://$BUCKET/ --delete
