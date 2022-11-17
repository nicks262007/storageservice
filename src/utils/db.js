const db = require('mongoose');

(db).Promise = global.Promise;

const initDB = (cb) => {
  db.connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DBNAME,
  }).then(() => {
    console.log('DB connection successful!');
    cb(db);
  });
};

module.exports = {
  initDB,
};
