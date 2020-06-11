'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//db connection
db.user = require('./user')(sequelize,Sequelize);
db.market = require('./market')(sequelize,Sequelize);
db.product = require('./product')(sequelize,Sequelize);
db.matching = require('./matching')(sequelize,Sequelize);
db.match_list = require('./match_list')(sequelize,Sequelize);
db.match_order = require('./match_order')(sequelize,Sequelize);
db.match_chat = require('./match_chat')(sequelize,Sequelize);
db.matching_member = require('./matching_member')(sequelize,Sequelize);
db.sharing = require('./sharing')(sequelize,Sequelize);
db.share_list = require('./share_list')(sequelize,Sequelize);
db.share_order = require('./share_order')(sequelize,Sequelize);
db.share_chat = require('./share_chat')(sequelize,Sequelize);
db.sharing_member = require('./sharing_member')(sequelize,Sequelize);

//db relationship

//matching

//market <-> product
db.market.hasMany(db.product, {foreignKey: 'marketID', sourceKey:"id"});
db.product.belongsTo(db.market, {foreignKey:'marketID', targetKey: "id"});

// //user <-> matching
// db.user.hasOne(db.matching, {foreignKey: 'creatorID', sourceKey: 'id'});
// db.matching.belongsTo(db.user, {foreignKey: 'creatorID', targetKey: 'id'});
//
// db.user.hasMany(db.matching, {foreignKey: 'participantID', sourceKey: 'id'});
// db.matching.belongsTo(db.user, {foreignKey: 'participantID', targetKey: 'id'});

//product <-> matching
db.product.hasOne(db.matching, {foreignKey: 'productID', sourceKey: 'id'});
db.matching.belongsTo(db.product, {foreignKey:'productID', targetKey: 'id'});

//matching <-> match_list
db.matching.hasMany(db.match_list, {foreignKey: 'matchingID', sourceKey: 'id'});
db.match_list.belongsTo(db.matching, {foreignKey: 'matchingID', targetKey: 'id'});

// //user <-> match_list
// db.user.hasOne(db.match_list, {foreignKey: 'participantID', sourceKey: 'id'});
// db.match_list.belongsTo(db.user, {foreignKey: 'participantID', targetKey: 'id'});

//matching <-> match_order
db.matching.hasMany(db.match_order, {foreignKey: 'matchingID', sourceKey: 'id'});
db.match_order.belongsTo(db.matching, {foreignKey: 'matchingID', sourceKey: 'id'});

// //user <-> match_order
// db.user.hasOne(db.match_order, {foreignKey: 'participantID', sourceKey: 'id'});
// db.match_order.belongsTo(db.user, {foreignKey: 'participantID', targetKey: 'id'});

// //user <-> match_chat
// db.user.hasMany(db.match_chat, {foreignKey: 'userID', sourceKey:'id'});
// db.match_chat.belongsTo(db.user, {foreignKey: 'userID', targetKey: 'id'});

//matching <-> match_chat
db.matching.hasOne(db.match_chat, {foreignKey: 'matchingID', sourceKey:'id'});
db.match_chat.belongsTo(db.matching, {foreignKey: 'matchingID', targetKey: 'id'});

//user <-> matching_member
db.user.hasOne(db.matching_member, {foreignKey: 'creatorID', sourceKey:'id'});
db.matching_member.belongsTo(db.user, {foreignKey: 'creatorID', targetKey: 'id'});

//user <-> matching_member
db.user.hasMany(db.matching_member, {foreignKey: 'participantID', sourceKey:'id'});
db.matching_member.belongsTo(db.user, {foreignKey: 'participantID', targetKey: 'id'});


//matching  <-> matching_member
db.matching.hasOne(db.matching_member, {foreignKey: 'matchingID', sourceKey:'id'});
db.matching_member.belongsTo(db.matching, {foreignKey: 'matchingID', targetKey: 'id'});

//sharing

//sharing <-> share_list
db.sharing.hasMany(db.share_list, {foreignKey: 'sharingID', sourceKey: 'id'});
db.share_list.belongsTo(db.sharing, {foreignKey: 'sharingID', targetKey: 'id'});

//sharing <-> share_order
db.sharing.hasMany(db.share_order, {foreignKey: 'sharingID', sourceKey: 'id'});
db.share_order.belongsTo(db.sharing, {foreignKey: 'sharingID', sourceKey: 'id'});

//sharing <-> share_chat
db.sharing.hasOne(db.share_chat, {foreignKey: 'sharingID', sourceKey:'id'});
db.share_chat.belongsTo(db.sharing, {foreignKey: 'sharingID', targetKey: 'id'});

//user <-> sharing_member
db.user.hasOne(db.sharing_member, {foreignKey: 'creatorID', sourceKey:'id'});
db.sharing_member.belongsTo(db.user, {foreignKey: 'creatorID', targetKey: 'id'});
//user <-> sharing_member
db.user.hasMany(db.sharing_member, {foreignKey: 'participantID', sourceKey:'id'});
db.sharing_member.belongsTo(db.user, {foreignKey: 'participantID', targetKey: 'id'});

//sharing  <-> sharing_member
db.sharing.hasOne(db.sharing_member, {foreignKey: 'sharingID', sourceKey:'id'});
db.sharing_member.belongsTo(db.sharing, {foreignKey: 'sharingID', targetKey: 'id'});

module.exports = db;
