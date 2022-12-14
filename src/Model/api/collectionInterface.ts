import {AbstractItem} from "./abstractItem";
import {RepositoryInterface} from "./repositoryInterface";

export interface CollectionInterface<T> {
  getAllItems: () => Promise<T[]>;
}

export abstract class AbstractCollection<T>
  extends AbstractItem
  implements CollectionInterface<T>
{
  private repository: RepositoryInterface<T>;
  protected constructor(resource: RepositoryInterface<T>, key: string) {
    super(key);
    this.repository = resource;
  }
  async getAllItems(): Promise<T[]> {
    return this.repository.getAll();
  }
}
