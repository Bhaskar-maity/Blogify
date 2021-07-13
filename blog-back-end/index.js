const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
app.use(express.json());

mongoose
   .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(console.log("mongodb connected"))
   .catch((err) => console.log(err));

app.use("/auth", authRoute);
app.use("/post", postRoute);

app.listen("5000", () => {
   console.log("app running");
});
