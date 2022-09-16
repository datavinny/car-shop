import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import MotorcycleModel from '../../../models/Motorcycle';
import { Model } from 'mongoose';
import { motorcycleMock, motorcycleMockWithId, motorcycleMockEmpty } from '../../mocks/motorcycleMock';
import { ZodError } from 'zod';

describe('Car Model', () => {
const motorcycleModel = new MotorcycleModel();
const ID = '4edd40c86762e0fb12000021'

  before(async () => {
    sinon.stub(Model, 'create').resolves(motorcycleMockWithId);
    sinon.stub(Model, 'find').resolves([motorcycleMockWithId]);
    sinon.stub(Model, 'findOne').resolves(motorcycleMockWithId);
    // sinon.stub(Model, 'update').resolves(motorcycleMock);
    // sinon.stub(Model, 'deleteOne').resolves(motorcycleMock);
  });

  after(()=>{
    sinon.restore();
  })
  
  describe('Create Motorcycle', () => {
    it('Sucess', async () => {
      const newMotorcycle = await motorcycleModel.create(motorcycleMock);
      expect(newMotorcycle).to.be.deep.equal(motorcycleMockWithId);
    });
  });

  describe('Get All Motorcycle', () => {
    it('Sucess', async () => {
      const newMotorcycle = await motorcycleModel.read();
      expect(newMotorcycle).to.be.deep.equal([motorcycleMockWithId]);
    });
  });

  describe('Get Motorcycle by ID', () => {
    it('Sucess', async () => {
      const newMotorcycle = await motorcycleModel.readOne(ID);
      expect(newMotorcycle).to.be.deep.equal(motorcycleMockWithId);
    });
    it('Fail, _id not found', async () => {
      try {
        await motorcycleModel.readOne('123ERRADO');
      } catch(error: any) {
        expect(error.message).to.be.deep.equal('InvalidMongoId');
      }
    });
  });

  describe('Update Motorcycle', () => {
    // it('Sucess', async () => {
    //   const newMotorcycle = await motorcycleModel.update(ID, motorcycleMock);
    //   expect(newMotorcycle).to.be.deep.equal(motorcycleMockWithId);
    // });
    it('Fail, _id not found', async () => {
      let error;
      try {
        await motorcycleModel.update('123ERRADO', motorcycleMock);
      } catch(err: any) {
        error = err;
      }
      expect(error.message).to.be.deep.equal('InvalidMongoId');
    });
    it('Fail, req.body invalid ZodError', async () => {
      let error;
      try {
        await motorcycleModel.update('123ERRADO', motorcycleMockEmpty);
      } catch(err) {
        error = err;
      }
      expect(error).to.be.instanceOf(ZodError);
    });
  });

  describe('Delete Motorcycle', () => {
    // it('Sucess', async () => {
    //   const newMotorcycle = await motorcycleModel.delete(ID);
    //   expect(newMotorcycle).to.be.deep.equal(motorcycleMockWithId);
    // });
    it('Fail, _id not found', async () => {
      try {
        await motorcycleModel.delete('123ERRADO');
      } catch(error: any) {
        expect(error.message).to.be.deep.equal('InvalidMongoId');
      }
    });
  });
});