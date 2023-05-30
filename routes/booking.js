const express = require("express");
const { bookFlight, getAllFlight } = require("../controllers/bookingCon");

const bookingRouter = express.Router();

bookingRouter.post("/booking", bookFlight);
bookingRouter.get("/dashboard", getAllFlight);

module.exports = {
  bookingRouter,
};
