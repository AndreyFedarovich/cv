const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const app = express();
const schema = require("./schema");
const mongoose = require("mongoose");
const { DB_ACCESS } = require("./env/constants");

app.use(cors());

mongoose.connect(DB_ACCESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

const db = mongoose.connection;

db.on("error", (err) => console.log(`Connection error: ${err}`));
db.once("open", () => console.log("Connected to DB!"));

app.listen("5000", () => {
  console.log("Server is started on 5000!");
});
