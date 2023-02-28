import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/schema.js";
import resolvers from "./data/resolvers.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Graphql is amazing");
});

class Product {
  constructor(id, { name, description, price, soldout, stores }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.soldout = soldout;
    this.stores = stores;
  }
}

const productDatabase = {};

const root = resolvers;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8080, () =>
  console.log("Running server on port localhost:8080/graphql")
);
