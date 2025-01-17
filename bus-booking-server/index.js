import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import customerRoutes from "./routes/customerRoutes.js";
import homeRoutes from "./routes/home.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;


connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true, 
}));


app.use("/", homeRoutes);
app.use("/api/customer", customerRoutes);


app.use((err, req, res, next) => {
  console.error(" Error:", err.message);
  res.status(err.status || 500).json({ msg: err.message || "Server Error" });
});


app.listen(port, () =>
  console.log(` Server running on http://localhost:${port}`)
);
