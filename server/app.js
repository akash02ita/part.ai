require('dotenv').config();

const graphQLRouter = require('./routes/graphql');

const express = require('express');
const app = express();
const PORT =  process.env.PORT || 4000;

// use static public folder: client -> npm run build
const path = require('path');
app.use(express.static(path.join(__dirname, "../client", "build")));

app.use("/", graphQLRouter);

// allow routes of react
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
})