import app from "./app.js";
import connectToDB from "./config/database.js";
import path from "path";

//Connecting to database 
connectToDB();

app.listen(process.env.PORT,()=>{
    console.log(`App is working on http://localhost:${process.env.PORT}`);
})
