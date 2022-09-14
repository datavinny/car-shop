import express from 'express';
import 'express-async-errors';
import carRoutes from './routes/Car';
import errorHandler from './middlewares/error';

const app = express();
app.use(express.json());
app.use(carRoutes);
app.use(errorHandler);

export default app;
