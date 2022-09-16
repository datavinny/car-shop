import { Router } from 'express';
import MotorcycleModel from '../models/Motorcycle';
import MotorcycleService from '../services/Motorcycle';
import MotorcycleController from '../controllers/Motorcycle';

const motorcycleModel = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycleModel);
const motorcycleController = new MotorcycleController(motorcycleService);

const route = Router();

const URL = '/motorcycles';
const URL_WITH_ID = '/motorcycles/:id';

route.post(URL, (req, res) => motorcycleController.create(req, res));
route.get(URL, (req, res) => motorcycleController.read(req, res));
route.get(URL_WITH_ID, (req, res) => motorcycleController.readOne(req, res));
route.put(URL_WITH_ID, (req, res) => motorcycleController.update(req, res));
route.delete(URL_WITH_ID, (req, res) => motorcycleController.delete(req, res));

export default route;