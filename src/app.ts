import express from 'express';
import 'express-async-errors';
import carRoutes from './routes/Car';
import motorcycleRoutes from './routes/Motorcycle';
import errorHandler from './middlewares/error';

const app = express();
app.use(express.json());
app.use(carRoutes);
app.use(motorcycleRoutes);
app.use(errorHandler);

export default app;
