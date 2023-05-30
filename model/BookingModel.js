const mongoose = require("mongoose");

const schema = mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "User" },
  flight: { type: mongoose.Types.ObjectId, ref: "Flight" },
});

const BookingModel = mongoose.model("flight", schema);

module.exports = {
  BookingModel,
};
