const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  stockName: {
    type: String,
    required: [true, "Name of the Stock"],
  },
  serialNumber: {
    type: Number,
    required: [true, "Name of the Stock"],
  },
  date: {
    type: String,
    required: [true, "Date is required"],
  },
  cycle: {
    type: Number,
    required: [true, "Date is required"],
  },
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
