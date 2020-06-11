const jwt = require("jsonwebtoken");
const models = require('../models');

const decodeJWT = async(token)=> {
    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN || "");
        const {id} = decoded;
        const users = await models.user.findAll({where: {id}});
        return users;
    } catch(err){
        return err;
    }
};
/*const decodeJWT = async(token)=> {
    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN || "");
        const {id} = decoded;
        const users = await models.user.findOne({id});
        return users;
    } catch(err){
        return undefined;
    }
};
 */

module.exports = decodeJWT;