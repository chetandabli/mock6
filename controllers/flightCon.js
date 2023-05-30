const { FlightModel } = require("../model/FlightModel");
const { BookingModel } = require("../model/BookingModel");

const getFlights = async (req, res) => {
  try {
    const flights = await FlightModel.aggregate([
      { $match: { seats: { $gte: 1 } } },
    ]);
    res.status(200).json(flights);
  } catch (error) {
    console.log(error);
  }
};

const getFlightsbyID = async (req, res) => {
  const id = req.params.id;
  try {
    const flight = await FlightModel.findById(id);
    res.status(200).json(flight);
  } catch (error) {
    console.log(error);
  }
};

const postFlight = async (req, res) => {
  const {
    airline,
    flightNo,
    departure,
    arrival,
    departureTime,
    arrivalTime,
    seats,
    price,
  } = req.body;
  if (
    airline &&
    flightNo &&
    departure &&
    arrival &&
    departureTime &&
    arrivalTime &&
    seats &&
    price
  ) {
    try {
      const newFlight = new FlightModel({
        airline,
        flightNo,
        departure,
        arrival,
        departureTime,
        arrivalTime,
        seats,
        price,
      });
      await newFlight.save();
      res.status(201).send("flight posted!");
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(400).send("please provide all details");
  }
};

const updateFlight = async (req, res) => {
  const id = req.params.id;
  try {
    await FlightModel.findByIdAndUpdate(id, req.body);
    res.status(204).send("flight updated!");
  } catch (error) {
    console.log(error);
  }
};

const deleteFlight = async (req, res) => {
  const id = req.params.id;
  try {
    await FlightModel.findByIdAndDelete(id);
    res.status(202).send("flight deleted!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getFlights,
  getFlightsbyID,
  postFlight,
  updateFlight,
  deleteFlight,
};
