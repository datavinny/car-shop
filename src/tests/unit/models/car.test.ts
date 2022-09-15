import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/Car';
import { Model } from 'mongoose';
import { carMock, carMockWithId } from '../../mocks/carMock';

describe('Car Model', () => {
const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })
  
  describe('Creating Car', () => {
    it('Sucess (using the mock)', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  });

});