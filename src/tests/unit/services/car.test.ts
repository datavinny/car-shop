import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import { carMock, carMockWithId } from '../../mocks/carMock';
import { ZodError } from 'zod';

describe('Car Service', () => {
const carModel = new CarModel();
const carService = new CarService(carModel);

  before(async () => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Creating Car', () => {
    it('Sucess (using the mock)', async () => {
      const carCreated = await carService.create(carMock);
      expect(carCreated).to.be.deep.equal(carMockWithId);
    });
    it('Fail (NOT using the mock)', async () => {
      let error;
      try {
        await carService.create({});
      } catch(err) {
        error = err
      }
      expect(error).to.be.instanceOf(ZodError);
    });
  });
});