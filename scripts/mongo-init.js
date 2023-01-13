db.auth("root", "password");

db = db.getSiblingDB("rostDB");
var file = cat("./data.json");

var o = JSON.parse(file);
db.forms.insert(o);
db.createUser({
  user: "ivan",
  pwd: "password",
  roles: [
    {
      role: "root",
      db: "ivanp",
    },
  ],
});
