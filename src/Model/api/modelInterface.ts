import { RepositoryInterface } from "@Model/api/index";
import {AbstractItem} from "./abstractItem";

export interface ModelInterface<T> {
  getById(id: string): Promise<T | null>;

  save(item: T): Promise<boolean>;

  deleteById(id: string): Promise<boolean>;

  modify(item: T): Promise<T>;
}

export abstract class AbstractModel<T>
  extends AbstractItem
  implements ModelInterface<T>
{
  private repository: RepositoryInterface<T>;
  protected constructor(resource: RepositoryInterface<T>, key: string) {
    super(key);
    this.repository = resource;
  }

  async deleteById(id: string): Promise<boolean> {
    return this.repository.deleteById(id);
  }

  async getById(id: string): Promise<T | null> {
    return this.repository.getById(id);
  }

  async modify(item: T): Promise<T> {
    return this.repository.modify(item);
  }

  async save(item: T): Promise<boolean> {
    return this.repository.save(item);
  }
}
