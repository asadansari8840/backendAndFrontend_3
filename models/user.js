import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true,"Please enter name"] ,
        minLength: [4,"Name cannot be less than 4 characters"],
    },
    email: {
        type: String,
        required: [true,"Please enter your email"],
        unique : [true, "This email is already taken !"],
        validate: [validator.isEmail,"Please enter a valid email address"],
    },
    phone: {
        type: Number,
        required : [true,"Please enter youyr phone no."] ,
        minLength: [10,"Phone number cannot be less than 10 digits"],
    },
    website: {
        type: String,
        required: [true,"Enter your website."]
    },
   address:{
      street : {
        type: String,
        required: [true,"Please enter your street name."]
      },
      suite : {
        type: String,
        required: [true,"Please enter your suite."]
      },
      city : {
        type: String,
        required: [true,"Please enter your city."]
      },
      zipcode : {
        type: Number,
        required: [true,"Please enter the zipcode"],
        minLength: [5,"Zipcode cannot be less than 5 digits"],
        maxLength: [10,"Zipcode cannot be more than 10 digits"]
      },
   },
   company : {
    type: String,
    required: [true, "Company name is required"],
   },
});


export default mongoose.model("User",userSchema);
