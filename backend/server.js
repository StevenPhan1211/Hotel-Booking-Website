const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const auth = require("./config/auth");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Kết nối database
const pool = require("./config/db");

// Import API routes
const accRouter = require("./routes/accountsRoute");
const addressesRouter = require("./routes/addressesRoute")
const amenitiesRouter = require("./routes/amenityRoute");
const bookingRouter = require("./routes/bookingRoute");
const customerRouter = require("./routes/customersRoute");
const hotelsRouter = require("./routes/hotelsRoute");
const paymentsRouter = require("./routes/paymentsRoute");
const reviewsRouter = require("./routes/reviewsRoute");
const roomImagesRouter = require("./routes/roomImagesRoute");
const roomRouter = require("./routes/roomsRoute");
const roomTypesRouter = require("./routes/roomTypesRoute");
const usersRouter = require("./routes/usersRoute")

// JWT
app.use(function (req, res, next) {
  const token = req.cookies.accessToken;
  if (token) {
    const user = auth.verifyToken(token);
    res.locals.user = user;
  }
  next();
});


// Sử dụng API routes
app.use("/accounts", accRouter);
app.use("/addresses", addressesRouter);
app.use("/amenities", amenitiesRouter);
app.use("/bookings", bookingRouter);
app.use("/customers", customerRouter);
app.use("/hotels", hotelsRouter);
app.use("/payments", paymentsRouter);
app.use("/reviews", reviewsRouter);
app.use("/roomimages", roomImagesRouter);
app.use("/rooms", roomRouter);
app.use("/roomtypes", roomTypesRouter);
app.use("/users", usersRouter);


// Middleware xử lý lỗi 404
app.use((req, res, next) => {
  res.status(404).json({ error: "API not found!" });
});

// Chạy server backend
app.listen(PORT, () => {
  console.log(`App listening at: http://localhost:${PORT}`);
});
