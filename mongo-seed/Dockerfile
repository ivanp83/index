FROM mongo

COPY data.json /data.json
CMD mongoimport --host mongodb --db ivanpozdnyakov --collection pages --type json --file /data.json --jsonArray