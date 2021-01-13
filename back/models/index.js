const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.User = require('./user')(sequelize, Sequelize);
db.Diary = require('./diary')(sequelize, Sequelize);
db.Image = require('./image')(sequelize, Sequelize);
db.Calendar = require('./calendar')(sequelize, Sequelize);
db.Bucket = require('./bucket')(sequelize, Sequelize);

// 각 모델에서 설정한 associate 연결
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
