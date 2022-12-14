import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import CarController from '../../../controllers/Car';
import { Request, Response } from 'express';
import { carMock, carMockWithId } from '../../mocks/carMock';

describe('Car Controller', () => {
const carModel = new CarModel();
const carService = new CarService(carModel);
const carController = new CarController(carService);

const req = {} as Request;
const res = {} as Response;

  before(async () => {
    sinon.stub(carService, 'create').resolves(carMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Creating Car', () => {
    it('Sucess (using the mock)', async () => {
      req.body = carMockWithId;
      await carController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    });
  });

});