const Stock = require("./../models/stockModel");
const reqDate = require("./../models/yearDates");

exports.createStock = async (req, res) => {
  console.log(req.body);
  const serialNumberOfDate = await reqDate.find({ mDates: req.body.date });

  console.log(serialNumberOfDate);
  const serialNumberAdd = serialNumberOfDate[0].serialNumber;

  try {
    const newStock = await Stock.create({
      stockName: req.body.stockName,
      date: req.body.date,
      cycle: req.body.cycle,
      serialNumber: serialNumberAdd,
    });
    req.flash("success", "STOCK ADDED");
    res.redirect("/stock");
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// exports.reversalDate = async (req, res) => {
//   const stocksName = req.body.stockName;
//   const stocks = await Stock.find({ stockName: stocksName });
//   console.log(stocks[0].date);
//   const stocksDate = stocks[0].serialNumber;
//   const stocksCycle = stocks[0].cycle;
//   console.log(stocksCycle);

//   var findQuery = [];
//   for (let i = stocksDate; i < 310 - stocksCycle; ) {
//     findQuery.push({ serialNumber: i });
//     i += stocksCycle;
//   }

//   const revDates = await reqDate.find({
//     $or: findQuery,
//   });

//   res.render("partials/showDates", { revDates });
// };

// exports.getPage = async (req, res) => {
//   const allStocks = await Stock.find();
//   res.render("partials/addStockes", { allStocks });
// };

exports.reversalDate = async (req, res) => {
  const allStocks = await Stock.find();
  const stocksName = req.body.stockName;
  var revDatesStore = [];
  const stocks = await Stock.find({ stockName: stocksName });
  console.log(stocks[0].date);
  for (i = 0; i < stocks.length; i++) {
    const stocksDate = stocks[i].serialNumber;
    const stocksCycle = stocks[i].cycle;
    console.log(stocksCycle);

    var findQuery = [];
    for (let i = stocksDate; i < 310 - stocksCycle; ) {
      findQuery.push({ serialNumber: i });
      i += stocksCycle;
    }

    const revDates = await reqDate.find({
      $or: findQuery,
    });

    for (j = 0; j < revDates.length; j++) {
      revDatesStore.push(revDates[j]);
    }
  }

  res.render("partials/showDates", { revDatesStore, allStocks });
};

exports.getPage = async (req, res) => {
  const allStocks = await Stock.find();
  // console.log(allStocks);
  res.render("partials/addStockes", { allStocks });
};
