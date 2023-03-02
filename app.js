import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import path from "path";
import errorMiddleware from "./middlewares/error.js";
const app = express();
//adding body parser for parsing bodies from frontend
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

dotenv.config({
    path: "./config/config.env"
});

//Adding routes for user
import {UserRouter} from "./routes/userRoutes.js";
app.use("/api/v1",UserRouter);


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get("*",(req,res)=> res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')))
}

//Adding middelware for errors
app.use(errorMiddleware);

export default app ;