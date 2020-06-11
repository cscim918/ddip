const express = require('express');
const { ApolloServer} = require('apollo-server-express')
const models = require('./models');
const expressPlayground = require('graphql-playground-middleware-express').default
const decodeJWT = require('./middleware/decodeJWT');
require("dotenv").config();

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

app.use(
    jwt = async (req, res, next) => {
        const token = req.get("X-JWT");
        if(token){
            const user = await decodeJWT(token);
            console.log(user);
        }
        next();
    }
)

/*
app.use(
    jwt = async (req, res, next) => {
        const token = req.get("X-JWT");
        try {
            const nickname = await decodeJWT(token);
            req.nickname = nickname;
            console.log(req.nickname);
        } catch (error) {
            console.log("err");
            return error;
        }
    }
)
 */
/*class App{
    app: GraphQLServer;
    constructor() {
        this.app = new GraphQLServer({});
        this.middlewares();
    }
    middlewares = (): void => {
        this.app.express.use(cors());
        this.app.express.use(logger('dev'));
        this.app.express.use(helmet());
    };
}
 */

server.applyMiddleware({ app });

models.sequelize.authenticate();
models.sequelize.sync();

app.get('/',(req, res) => res.end('Welcome to the API'))
app.get('/playground', expressPlayground({endpoint: '/graphql'}))

/*app.get(
    async function(req, res, next) {
        const token = req.get("X-JWT");
        if (token) {
            const user = await decodeJWT(token);
            req.user = user;
        }
        next();
    }
)
 */

app.listen({port}, () => {
    console.log(`GraphQL Server running on ${server.graphqlPath}`)
})