require('dotenv').config();
const path = require('path');
const app = require('./src/app');
const { ApolloServer } = require('apollo-server-express');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const port = process.env.PORT
const typeArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

// (async () => {
//     const schema = makeExecutableSchema({typeDefs: typeArray, resolvers: resolversArray});
//     const server = new ApolloServer({schema})
//     await server.start();
//     server.applyMiddleware({app,path:'/graphql'})
//     app.listen(port,() => console.log(`server is running on port:${port}`))
// })()

app.listen(port,() => console.log(`server is running on port:${port}`))
