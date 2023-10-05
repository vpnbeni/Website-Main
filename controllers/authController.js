const passport = require("passport");
const User = require("./../models/userModel");

exports.signUp = async (req, res) => {
  try {
    const { email, password, courseSelected } = req.body;
    const username = req.body.email;
    const user = new User({ email, username, courseSelected });
    const registeredUser = await User.register(user, password);
    res.redirect("/");
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.logIn = [
  passport.authenticate("local", {
    failureMessage: true,
    failureRedirect: "/new/login",
    keepSessionInfo: true,
  }),
  (req, res) => {
    req.flash("success", "welcome back");
    const redirectUrl = req.session.returnTo || "/";
    delete req.session.returnTo;
    res.redirect(redirectUrl);
  },
];
