import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "graphql-tools";
import schema from "./data/schema.js";

import resolvers from "./data/resolvers.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Graphql is amazing");
});

const productDatabase = {};

const root = resolvers;

const jsSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers: resolvers,
});

const yoga = graphqlHTTP({ schema: jsSchema, graphiql: true });

app.use("/graphql", yoga);

app.listen(8080, () =>
  console.log("Running server on port localhost:8080/graphql")
);
