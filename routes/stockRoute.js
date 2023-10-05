const express = require("express");
const stockcontroller = require("./../controllers/stockController");
const router = express.Router();

router.route("/").get(stockcontroller.getPage);
router.route("/getdates").get(stockcontroller.reversalDate);
router.route("/createstock").post(stockcontroller.createStock);
router.route("/getdate").post(stockcontroller.reversalDate);
module.exports = router;
