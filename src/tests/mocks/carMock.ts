import { ICar } from "../../interfaces/ICar";

const carMock:ICar = {
  model: 'Maybach 62s',
  year: 2009,
  color: 'black',
  status: false,
  buyValue: 500000,
  doorsQty: 4,
  seatsQty: 5,
};

const carMockWithId:ICar & { _id:string } = {
  _id: '4edd40c86762e0fb12000021',
  model: 'Maybach 62s',
  year: 2009,
  color: 'black',
  status: false,
  buyValue: 500000,
  doorsQty: 4,
  seatsQty: 5,
};

const carMockEmpty:ICar = {
  model: '',
  year: 0,
  color: '',
  buyValue: 0,
  doorsQty: 0,
  seatsQty: 0,
};

export { carMock, carMockWithId, carMockEmpty };