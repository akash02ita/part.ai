import express from "express";
import { graphqlHTTP } from "express-graphql";

import dotenv from 'dotenv';
dotenv.config();

import schema  from "./data/schema.js"
import resolvers from "./data/resolvers.js"


const root = resolvers;
const app = express();

import dbConnector from "./data/dbConnector.js";
// use static public folder: client -> npm run build
// import path from 'path'
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));
// app.use(express.static(path.join(__dirname, "./client", "build")));


app.get("/", (req, res)=> {
    res.send("You have sucessfully connected to the api.")
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

// // allow routes of react
// app.use((req, res, next) => {
//     res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
// });

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Part.ai listening on port http://localhost:${port}`)
});

const start = async () => {
  try {
    await dbConnector();
  } catch (error) {
    console.log(error);
  }
};

start()