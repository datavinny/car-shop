import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/Car';
import { Model } from 'mongoose';
import { carMock, carMockWithId, carMockEmpty } from '../../mocks/carMock';
import { ZodError } from 'zod';

describe('Car Model', () => {
const carModel = new CarModel();
const ID = '4edd40c86762e0fb12000021'

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves([carMockWithId]);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
    // sinon.stub(Model, 'update').resolves(carMock);
    // sinon.stub(Model, 'deleteOne').resolves(carMock);
  });

  after(()=>{
    sinon.restore();
  })
  
  describe('Create Car', () => {
    it('Sucess (using the mock)', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  });

  describe('Get All Car', () => {
    it('Sucess', async () => {
      const newCar = await carModel.read();
      expect(newCar).to.be.deep.equal([carMockWithId]);
    });
  });

  describe('Get Car by ID', () => {
    it('Sucess', async () => {
      const newCar = await carModel.readOne(ID);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
    it('Fail, _id not found', async () => {
      try {
        await carModel.readOne('123ERRADO');
      } catch(error: any) {
        expect(error.message).to.be.deep.equal('InvalidMongoId');
      }
    });
  });

  describe('Update Car', () => {
    // it('Sucess', async () => {
    //   const newCar = await carModel.update(ID, carMock);
    //   expect(newCar).to.be.deep.equal(carMockWithId);
    // });
    it('Fail, _id not found', async () => {
      let error;
      try {
        await carModel.update('123ERRADO', carMock);
      } catch(err: any) {
        error = err;
      }
      expect(error.message).to.be.deep.equal('InvalidMongoId');
    });
    it('Fail, req.body invalid ZodError', async () => {
      let error;
      try {
        await carModel.update('123ERRADO', carMockEmpty);
      } catch(err) {
        error = err;
      }
      expect(error).to.be.instanceOf(ZodError);
    });
  });

  describe('Delete Car', () => {
    // it('Sucess', async () => {
    //   const newCar = await carModel.delete(ID);
    //   expect(newCar).to.be.deep.equal(carMockWithId);
    // });
    it('Fail, _id not found', async () => {
      try {
        await carModel.delete('123ERRADO');
      } catch(error: any) {
        expect(error.message).to.be.deep.equal('InvalidMongoId');
      }
    });
  });
});