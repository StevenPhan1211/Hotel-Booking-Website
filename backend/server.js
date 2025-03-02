const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: true }));

// Kết nối database
const pool = require("./config/db");

// Import API routes
const accRouter = require("./routes/accountsRoute");
app.use("/accounts", accRouter);

// Middleware xử lý lỗi 404
app.use((req, res, next) => {
  res.status(404).json({ error: "Không tìm thấy API!" });
});

// Chạy server backend
app.listen(PORT, () => {
  console.log(`App listening at: http://localhost:${PORT}`);
});

// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");
// const cors = require("cors");
// const dotenv = require("dotenv");
// dotenv.config();
// const port = 3000 || process.env.PORT;
// const app = express();
// app.use(cors());
// const morgan = require("morgan");
// app.use(morgan("combined"));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, "public")));
// //CODE HERE
// const userRouter = require("./src/routes/userRoute"); // Tạo hàm userRouter để gọi router từ file userRoute.js
// app.use("/users", userRouter); // Gắn tất cả các route đường dẫn đc định nghĩa trong file userRoute.js vào đường dẫn /users

// app.get("/", (req, res) => {
//   res.render("index"); //{user: {name: 'admin', email: 'hello'}});
// });

// // Middleware xử lý lỗi 404: Khi không có route nào khớp
// app.use((req, res, next) => {
//   console.log("404 middleware hit");
//   res.status(404).render("error404");
// });

// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`);
// });
