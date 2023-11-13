#! /bin/bash

docker run --platform linux/amd64 -i -t --rm --user $(id -u):$(id -g) -p 8080:3000 srp33/colorblind_friendly_tester 
