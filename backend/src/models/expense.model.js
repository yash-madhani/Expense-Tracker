import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    amount: { type: String, required: true },
    category: { type: String, required: true },
}, {timestamps: true});

export const expense = mongoose.model('Expense', expenseSchema);