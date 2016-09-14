#! /bin/bash

BUCKET=$1
echo "Copy templates to $BUCKET"
aws s3 cp --recursive esri/ s3://$BUCKET/esri/
