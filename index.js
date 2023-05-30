const express = require("express");
let app = express();
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user");
const { flightRouter } = require("./routes/flights");
const { bookingRouter } = require("./routes/booking");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Air Ticket Booking Home Page");
});

app.use("/api", userRouter);
app.use("/api", flightRouter);
app.use("/api", bookingRouter);

app.listen(3000, async () => {
  try {
    await connection;
    console.log("connection established with database");
  } catch (error) {
    console.log(error);
  }
  console.log("server is running...");
});
