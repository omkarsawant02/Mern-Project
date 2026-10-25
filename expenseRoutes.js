
const express = require("express");
const router = express.Router();

const Expense = require("../models/Expense");

// GET all expenses
router.get("/", async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST new expense or income
router.post("/", async (req, res) => {
    try {
        const { title, amount, category, type } = req.body;

        const expense = new Expense({
            title,
            amount,
            category,
            type
        });

        const savedExpense = await expense.save();

        res.status(201).json(savedExpense);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE expense
router.delete("/:id", async (req, res) => {
    try {
        const deletedExpense = await Expense.findByIdAndDelete(
            req.params.id
        );

        if (!deletedExpense) {
            return res.status(404).json({
                message: "Expense not found"
            });
        }

        res.json({
            message: "Expense deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
