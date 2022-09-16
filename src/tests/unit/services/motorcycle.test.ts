import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import MotorcycleModel from '../../../models/Motorcycle';
import MotorcycleService from '../../../services/Motorcycle';
import { motorcycleMock, motorcycleMockWithId } from '../../mocks/motorcycleMock';
import { ZodError } from 'zod';

describe('Motorcycle Service', () => {
const motorcycleModel = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycleModel);

  before(async () => {
    sinon.stub(motorcycleModel, 'create').resolves(motorcycleMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Create Motorcycle', () => {
    it('Sucess', async () => {
      const motorcycleCreated = await motorcycleService.create(motorcycleMock);
      expect(motorcycleCreated).to.be.deep.equal(motorcycleMockWithId);
    });
    it('Fail', async () => {
      let error;
      try {
        await motorcycleService.create({});
      } catch(err) {
        error = err
      }
      expect(error).to.be.instanceOf(ZodError);
    });
  });
});