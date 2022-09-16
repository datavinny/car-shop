import { IMotorcycle } from "../../interfaces/IMotorcycle";

const motorcycleMock:IMotorcycle = {
  model: 'Yamaha TTR 230',
  year: 2005,
  color: 'blue',
  status: true,
  buyValue: 500000,
  category: 'Trail',
  engineCapacity: 230,
};

const motorcycleMockWithId:IMotorcycle & { _id:string } = {
  _id: '4edd40c86762e0fb12000021',
  model: 'Yamaha TTR 230',
  year: 2005,
  color: 'blue',
  status: true,
  buyValue: 500000,
  category: 'Trail',
  engineCapacity: 230,
};

export { motorcycleMock, motorcycleMockWithId };