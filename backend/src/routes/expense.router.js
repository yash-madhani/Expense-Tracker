import { Router } from 'express';
import { createExpense, getExpenses, getExpense, updateExpense } from '../controllers/expense.controller.js';

const router = Router();

router.route('/add').post(createExpense);
router.route('/getall').get(getExpenses);
router.route('/get/:id').get(getExpense);
router.route('/update/:id').put(updateExpense);

export default router;