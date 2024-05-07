import e from 'express';
import express from 'express';

const app = express();
app.use(express.json());

import expenseRouter from './routes/expense.router.js';

app.use('/api/v1/expenses', expenseRouter);

export default app;