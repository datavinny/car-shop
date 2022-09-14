import IService from '../interfaces/IService';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

abstract class Service<T> implements IService<T> {
  protected _model:IModel<T>;

  constructor(model: IModel<T>) {
    this._model = model;
  }

  public async create(obj: T):Promise<T> {
    return this._model.create(obj);
  }

  public async read():Promise<T[]> {
    return this._model.read();
  }

  public async readOne(_id: string):Promise<T | null> {
    const result = await this._model.readOne(_id);
    if (!result) throw new Error(ErrorTypes.EntityNotFound);
    return result;
  }

  public async update(_id: string, obj: T):Promise<T | null> {
    return this._model.update(_id, obj);
  }

  public async delete(_id: string):Promise<T | null> {
    return this._model.delete(_id);
  }
}

export default Service;