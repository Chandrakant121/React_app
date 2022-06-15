const express = require("express");
const connect = require("./configs/db")
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const productController = require("./controller/product.controller");


app.use("/product", productController);

app.listen(5050, async () => {
   try {
      await connect();
      console.log("connected");
   } catch (err) {
      console.log("error");
   }
})