const Enquiry = require("./../models/enquruesmodel");

exports.getAllEnquries = async (req, res) => {
  try {
    const enquries = await Enquiry.find();

    res.status(200).json({
      status: "success",
      results: enquries.length,
      data: {
        enquries,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
    });
  }
};

exports.createEnquiry = async (req, res) => {
  try {
    const newEnquiry = await Enquiry.create(req.body);
    req.flash("success", "Enquiry Request Submitted");
    res.redirect("/");

    // res.status(201).json({
    //   status: "success",
    //   data: {
    //     enquiry: newEnquiry,
    //   },
    // });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
