module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl;
    req.flash("error", "*Please login to continue");
    return res.redirect("new/login");
  }
  next();
};
