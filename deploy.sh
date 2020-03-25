#!/bin/bash

set -e

cd build
aws --profile personal s3 cp --recursive . s3://top40.niallbyrne.ca
