const express = require('express');
const { ApolloServer} = require('apollo-server-express')
const models = require('./models');
const expressPlayground = require('graphql-playground-middleware-express').default
const decodeJWT = require('./middleware/decodeJWT');
require("dotenv").config();
const {GraphQLServer } = require('graphql-yoga');
/*
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const { GraphQLServer } = require('graphql-yoga');
 */
const path = require('path')
const mergeGraphqlSchemas = require('merge-graphql-schemas')
const fileLoader = mergeGraphqlSchemas.fileLoader
const typeDefs = fileLoader(path.join(__dirname, './graphql/**/*.graphql'))
const resolvers = fileLoader(path.join(__dirname, './resolvers/**/*.js'))

const app = express()
const port = 4000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { models }
});

/*class App{
    app = GraphQLServer;
    constructor(){
        this.app = new GraphQLServer({
            schema,
            context: req =>{
                return{
                    req: req.request
                }
            }
        })
    }
}
 */

app.use(
    jwt = async (req, res, next) => {
        const token = req.get("X-JWT");
        if(token){
            const user = await decodeJWT(token);
            req.user = user;
            console.log(req.user);
        }
        next();
    }
)

/*app.use(
    jwt = async (req, res, next) => {
        const token = req.get("X-JWT");
        if(!token){
            return next();
        }
        try{
            const nickName = await decodeJWT(token);
            req.nickName = nickName;
            return next();
        }catch(error){
            console.log("err");
            return error;
        }
    }
)
 */

server.applyMiddleware({ app });

models.sequelize.authenticate();
models.sequelize.sync();

app.get('/',(req, res) => res.end('Welcome to the API'))
app.get('/playground', expressPlayground({endpoint: '/graphql'}))

app.listen({port}, () => {
    console.log(`GraphQL Server running on ${server.graphqlPath}`)
})