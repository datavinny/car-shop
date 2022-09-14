import express from 'express';
import carRoutes from './routes/Car';

const app = express();
app.use(carRoutes);

export default app;
