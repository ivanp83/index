#! /bin/bash

mongoimport --host mongodb --db ivanpozdnyakov --collection pages --type json --file /mongo-seed/init.json --jsonArray