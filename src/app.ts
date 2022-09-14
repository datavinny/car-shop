import express from 'express';
import carRoutes from './routes/cars';

const app = express();
app.use(carRoutes);

export default app;
