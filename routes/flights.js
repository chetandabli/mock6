const express = require("express");
const {
  getFlights,
  getFlightsbyID,
  postFlight,
  updateFlight,
  deleteFlight,
} = require("../controllers/flightCon");

const flightRouter = express.Router();

flightRouter.get("/flights", getFlights);
flightRouter.get("/flights/:id", getFlightsbyID);
flightRouter.post("/flights", postFlight);
flightRouter.patch("/flights/:id", updateFlight);
flightRouter.delete("/flights/:id", deleteFlight);

module.exports = {
  flightRouter,
};
