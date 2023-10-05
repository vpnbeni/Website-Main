const mongoose = require("mongoose");
const validator = require("validator");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  // firstName: {
  //   type: String,
  //   required: [true, "Please Enter your First Name"],
  // },
  // lastName: {
  //   type: String,
  //   required: [true, "Please Enter your Last Name"],
  // },
  // dateOfBirth: {
  //   type: Date,
  //   required: [true, "Please Enter your Date of Birth"],
  // },
  // gender: {
  //   type: String,
  //   required: [true, "Please Specify Your Gender"],
  // },
  email: {
    type: String,
    required: [true, "Please Provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email address"],
  },
  courseSelected: {
    type: String,
    required: [true, "Please Select a Course"],
  },
  // phoneNumber: {
  //   type: Number,
  //   required: [true, "Please Enter your Phone Number"],
  // },
});
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);
module.exports = User;
