var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');

var ormOptions = {
    database: 'testleave',
  user: 'root',
  password: '',
  options: {
    host: 'localhost',
    port: 3306,
    timezone: '+09:00',
    dialect: 'mysql',
    pool: {
      max: 50,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: false,
  },
};

var {
  database, user, password, options,
} = ormOptions;


var sequelize = new Sequelize(database, user, password, options);
var db = {};
fs.readdirSync(__dirname)
    .filter(fileName => fileName.endsWith('.js'))
    .filter(fileName => !(['index.js', 'test.js', 'createDB.js'].includes(fileName)))
    .forEach((fileName) => {
      var modelName = fileName.substring(0, fileName.length - 3);
      db[modelName] = sequelize.import(path.join(__dirname, fileName));
    });

// 관계 설정 실행.
Object.keys(db)
    .filter(modelName => db[modelName].associate)
    .forEach(modelName => db[modelName].associate(db));

// 외부에서 접근을 용이하게 하기 위한 연결.
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;