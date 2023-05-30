const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://chetandabli:iman@cluster0.lcjokaq.mongodb.net/flights")

module.exports = {
    connection
}