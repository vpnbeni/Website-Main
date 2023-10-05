const mongoose = require("mongoose");
const validator = require("validator");

const enquirySchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please Enter your First Name"],
  },
  lastName: {
    type: String,
    required: [true, "Please Enter your Last Name"],
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Please Enter your Date of Birth"],
  },
  gender: {
    type: String,
    required: [true, "Please Specify Your Gender"],
  },
  email: {
    type: String,
    required: [true, "Please Provide your email"],
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email address"],
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please Enter your Phone Number"],
  },
  courseSelected: {
    type: String,
    required: [true, "Please Select a Course"],
  },
  preferredTime: {
    type: Date,
    required: [true, "Please Select a Preffered time to recieve a call"],
  },
});

const Enquiry = mongoose.model("Enquiry", enquirySchema);
module.exports = Enquiry;
