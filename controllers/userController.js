import User from "../models/user.js";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../utils/ErrorHandler.js";

//creating a user
const createUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, phone, website, street, suite, city, zipcode, company } =
    req.body;

  const user = await User.create({
    name: name,
    email: email,
    phone: phone,
    website: website,
    address: {
      street,
      suite,
      city,
      zipcode,
    },
    company: company,
  });

  res.status(200).json({
    success: true,
    message: "User created successfully",
    user,
  });
});

//Get all users
const getUsers = catchAsyncErrors(async (req, res, next) => {
  const userCount = await User.countDocuments();
  const users = await User.find();
  res.status(200).json({
    success: true,
    users,
    userCount,
  });
});

//delete a user
const deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new ErrorHandler("User not exist", 404));
  }

  await user.deleteOne();

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
});

//update a user
const updateUser = catchAsyncErrors(async (req, res, next) => {
  let user = await User.findById(req.params.id);
  if (!user) {
    return next(new ErrorHandler("Invalid user id", 404));
  }
  user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true ,
    message: "User updated successfully.",
    user,
  })
});

export { createUser, getUsers, deleteUser,updateUser };
