import { AbstractModel, ModelInterface } from "./modelInterface";
import { AbstractCollection, CollectionInterface } from "./collectionInterface";
import redis from "@helpers";

export * from "./repositoryInterface";
export * from "./modelInterface";
export * from "./collectionInterface";

export interface ResourceInterface<T>
  extends ModelInterface<T>,
    CollectionInterface<T> {}

export abstract class AbstractResource<T> implements ResourceInterface<T> {
  private model: AbstractModel<T>;

  private collection: AbstractCollection<T>;

  protected constructor(
    model: AbstractModel<T>,
    collection: AbstractCollection<T>
  ) {
    this.model = model;
    this.collection = collection;
  }

  getAllItems(): Promise<T[]> {
    return redisGetOrSave(this.collection.key, () => {
      return this.collection.getAllItems();
    });
  }

  deleteById(id: string): Promise<boolean> {
    return this.model.deleteById(id);
  }

  getById(id: string): Promise<T | null> {
    const key = `${this.model.key}${id}`;

    return redisGetOrSave(key, () => {
      return this.model.getById(id);
    });
  }

  modify(item: T): Promise<T> {
    return this.model.modify(item);
  }

  save(item: T): Promise<boolean> {
    return this.model.save(item);
  }
}

export async function redisGetOrSave(key: string, fetcher: () => Promise<any>) {
  const data = await redis.get(key);
  if (!data) {
    const response = await fetcher();
    await redis.set(key, JSON.stringify(response));
    return response;
  } else {
    return JSON.parse(data);
  }
}
