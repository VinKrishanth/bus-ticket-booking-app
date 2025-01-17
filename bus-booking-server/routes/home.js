import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Bus Ticket Booking System API!" });
});

export default router;
