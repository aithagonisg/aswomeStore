const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const routes = require("./routes/route");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
const uri =
  "mongodb+srv://aithagonisg:Sathish@cluster0.0815log.mongodb.net/db_cart?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successfull"))
  .catch((err) => console.log("Some thing went wrong", err));

app.use("/", routes);

app.listen(8080, () => {
  console.log(`Server Started at ${8080}`);
});
