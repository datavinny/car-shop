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

export { carMock, carMockWithId };