// require('dotenv').config()
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
// import { app } from "app";

dotenv.config({
    path: "./env"
})

const port = process.env.PORT || 8000

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`server is running at port : ${port}`);
        })
        app.on("error", (error) => {
            console.error("ERROR", error);
        })
    })
    .catch((err) => {
        console.log("mongoDB connection failed !! ", err);
    })