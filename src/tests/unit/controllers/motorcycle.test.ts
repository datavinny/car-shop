import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import MotorcycleModel from '../../../models/Motorcycle';
import MotorcycleService from '../../../services/Motorcycle';
import MotorcycleController from '../../../controllers/Motorcycle';
import { Request, Response } from 'express';
import { motorcycleMock, motorcycleMockWithId } from '../../mocks/motorcycleMock';

describe('Motorcycle Controller', () => {
const motorcycleModel = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycleModel);
const motorcycleController = new MotorcycleController(motorcycleService);

const req = {} as Request;
const res = {} as Response;

  before(async () => {
    sinon.stub(motorcycleService, 'create').resolves(motorcycleMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Create Motorcycle', () => {
    it('Sucess', async () => {
      req.body = motorcycleMockWithId;
      await motorcycleController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleMockWithId)).to.be.true;
    });
  });

});