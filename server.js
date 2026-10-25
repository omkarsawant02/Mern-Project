
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully!");
    })
    .catch((error) => {
        console.log("MongoDB Connection Failed:", error.message);
    });

// Expense Routes
const expenseRoutes = require("./routes/expenseRoutes");

app.use("/api/expenses", expenseRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("Personal Expense Tracker backend is running!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
