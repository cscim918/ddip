const models = require('../models')
const createJWT = require( '../middleware/createJWT')
const decodeJWT = require('../middleware/decodeJWT')
const privateResolver = require('./privateResolver')
const { BeforeInsert, BeforeUpdate } = require('typeorm');
const bcrypt = require('bcrypt');
const BCRYPT_ROUNDS = 10;

async function savePassword(){
    this.hashPassword = async function (password) {
        return bcrypt.hash(password, BCRYPT_ROUNDS);
    }
    if(this.password){
        const hashedPassword = await this.hashPassword(this.password);
        this.password = hashedPassword;
    }
}
async function comparePassword(password){
    return bcrypt.compare(password, this.password);
}

const resolvers = {
    Query: {
        async allUser(root, args, {models}) {
            try {
                return models.user.findAll()
            } catch(err){
                console.log(err);
                return false;
            }
        },
        getUser: privateResolver(async(root, args, models) => {
            const { req: { user } } = models;
            return{
                ok: true,
                error: null,
                user
            }
        })
    },
    Mutation: {
        addUser: async (root, {user_name, password, email, gender, tel_user, lat_user, long_user, address, tel_certify, balance, account}, {models}) => {
            const newUser = await models.user.create({
                user_name, password, email, gender, tel_user, lat_user, long_user, address, tel_certify, balance, account
            });
            const token = createJWT(newUser.id);
            return {
                ok: true,
                error: null,
                token: token
            }
        },
        async deleteUser (root, {user_name, password},{models}) {
            try {
                const delUser = await models.user.destroy({
                    where: {user_name, password}
                });
                return{
                    ok: true,
                    error: null
                }
            } catch (err) {
                console.log(err);
                return false;
            }
        },
        async updateUser (root, {user_name,password,email,tel_user,account}, {models}) {
            return models.user.update({password:password,email:email,tel_user:tel_user,account:account},{where: {user_name:user_name}});
        }
    }
};

module.exports = resolvers;
