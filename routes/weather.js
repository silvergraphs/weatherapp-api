var express = require("express");
var router = express.Router();
const axios = require("axios"); // I use Axios for simplified async fetchs

/* GET weather data */
router.get("/", async function (req, res, next) {
  var city = req.query.city || "";
  // Im scraping the data from OpenWeatherMap API
  try {
    const weatherQuery = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=996cbb1d5e875cb5b95daac84a9f1f55`
    );

    res.json(weatherQuery.data);
  } catch (err) {
    res.json(err.response.data);
  }
});

module.exports = router;
