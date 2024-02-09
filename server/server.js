require("dotenv").config();
const path = require("path");
// const app = require("./src/app");
const express = require('express')
const { ApolloServer } = require("apollo-server-express");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const connectDB = require("./src/config/db");
const morgan = require("morgan");
const port = process.env.PORT || 4000;
const typeArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

(async () => {
const app = express();

  try {
    const schema = makeExecutableSchema({
        typeDefs: typeArray,
        resolvers: resolversArray,
      });
      const server = new ApolloServer({ schema });
      await connectDB();
      await server.start();
      server.applyMiddleware({ app, path: "/graphql" });
      app.listen(port, () => console.log(`server is running on port:${port}`)); 
  } catch (error) {
    console.log(error);
  }
})();

// app.listen(port, () => console.log(`server is running on port:${port}`));
