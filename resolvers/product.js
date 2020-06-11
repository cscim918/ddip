const models = require('../models');
const createJWT = require( "../middleware/createJWT");

const resolvers = {
    Query: {
        async allProduct(root, {args}, {models}) {
            try {
                return models.product.findAll()
            }catch(err){
                console.log(err);
                return false;
            }
        },
        async marketproducts(root, {marketID}, {models}) {
            try {
                return models.product.findAll({where: {marketID}, raw: true});
            }catch(err){
                console.log(err);
                return false;
            }
        }
    },
    Mutation: {
        async addProduct (root, {product_name, product_quantity, product_price, product_category, product_description, product_img, product_onlyWoman, marketID}, {models}) {
            try {
                return models.product.create ({product_name, product_quantity, product_price, product_category, product_description, product_img, product_onlyWoman, marketID})
            }catch(err){
                console.log(err);
                return false;
            }
        }
    }
};

module.exports = resolvers;
