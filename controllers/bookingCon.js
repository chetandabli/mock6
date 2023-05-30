const { BookingModel } = require("../model/BookingModel");

const bookFlight = async (req, res) => {
  try {
    const newBooking = new BookingModel(req.body);
    await newBooking.save();
    res.status(201).send("flight booked!");
  } catch (error) {
    console.log(error);
  }
};

const getAllFlight = async (req, res) => {
  try {
    const bookings = await BookingModel.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  bookFlight,
  getAllFlight,
};
