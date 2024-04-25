import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./routes/userRoute.js";


const app = express();

app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB is connected sucessfully. .");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log("error"));

// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

// const UserModel = mongoose.model("users", userSchema);

// app.get("/api/user", async (req, res) => {
//   const userData = await UserModel.find();
//   res.json(userData);
// }
// );

app.use("/api/user", route);
