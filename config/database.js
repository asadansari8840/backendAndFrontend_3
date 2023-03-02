import mongoose from "mongoose";

const connectToDB = ()=>{
    mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
        console.log(`Connected to mongoose at : ${data.connection.host}`)
    });
};

export default connectToDB ;