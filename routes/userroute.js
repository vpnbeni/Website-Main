const express = require("express");
const authcontroller = require("./../controllers/authController");
const router = express.Router();
const passport = require("passport");

router
  .route("/signup")
  .get((req, res) => {
    res.render("partials/signup");
  })
  .post(authcontroller.signUp);
router
  .route("/login")
  .get((req, res) => {
    if (!req.isAuthenticated()) {
      res.render("partials/login");
    } else {
      res.redirect("/");
    }
  })
  .post(authcontroller.logIn);

router.get("/logout", (req, res, next) => {
  req.logOut(function (err) {
    if (err) {
      return next(err);
    } else {
      req.flash("success", "Logged out");
      res.redirect("/");
    }
  });
});
module.exports = router;
