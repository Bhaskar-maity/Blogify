const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer");

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

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, "imagesUploads");
   },
   filename: (req, file, cb) => {
      cb(null, req.body.name);
   },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
   res.status(200).json("File uploaded");
});
app.use("/auth", authRoute);
app.use("/post", postRoute);

app.listen("5000", () => {
   console.log("app running");
});
