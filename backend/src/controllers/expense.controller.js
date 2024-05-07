import { expense } from '../models/expense.model.js';

const createExpense = async (req, res) => {
    const newExpense = new expense({
        title: req.body.title,
        amount: req.body.amount,
        category: req.body.category,
    });
    try {
        const savedexpense = await newExpense.save();
        res.status(201).json(newExpense);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getExpenses = async (req, res) => {
    try {
        const expenses = await expense.find();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getExpense = async (req, res) => {
    try {
        const foundExpense = await expense.findById(req.params.id);
        res.status(200).json(foundExpense);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const updateExpense = async (req, res) => {
    try {
        const updatedExpense = await expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedExpense);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }   
}

export { createExpense, getExpenses, getExpense, updateExpense };