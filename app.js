const fs = require("fs");
const express = require("express");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const { isLoggedIn } = require("./middleware");
const path = require("path");
const enquiryRouter = require("./routes/enquriesroute");
const userRouter = require("./routes/userroute");
const stockRouter = require("./routes/stockRoute");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/userModel");

const app = express();
app.use(express.json());

app.engine("ejs", ejsMate);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const sessionConfig = {
  secret: "gashdgfbasdbfbasjf",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 24 * 7,
  },
};
app.use(session(sessionConfig));
app.use(flash());
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use("/enquiries", enquiryRouter);
app.use("/new", userRouter);
app.use("/stock", stockRouter);

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/dashboard", isLoggedIn, (req, res) => {
  const courseSelected = req.user.courseSelected;
  res.render("partials/dashboard", { courseSelected });
});

module.exports = app;
