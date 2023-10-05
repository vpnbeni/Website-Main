const express = require("express");

const enquriescontroller = require("./../controllers/enquriescontroller");

const router = express.Router();

router
  .route("/enquiry")
  .post(enquriescontroller.createEnquiry)
  .get(enquriescontroller.getAllEnquries);

module.exports = router;
