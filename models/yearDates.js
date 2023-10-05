const mongoose = require("mongoose");

const yearCal = new mongoose.Schema({
  serialNumber: {
    type: Number,
    required: [true, "Serial Number of date is required"],
  },
  mDates: {
    type: String,
    required: [true, "Date is required"],
  },
});
const reqDate = mongoose.model("reqDate", yearCal);

module.exports = reqDate;
