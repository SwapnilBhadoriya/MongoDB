const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let _db;
const initDb = (callback) => {
  if (_db) {
    console.log("Database is already initialised .");
    callback(null, _db);
  }
  MongoClient.connect("mongodb://localhost:27017")
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((error) => {
      callback(error);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error("Database not initialised");
  }
  return _db;
};

module.exports = { getDb, initDb };
