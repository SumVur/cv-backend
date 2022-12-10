import {ModelInterface} from "./modelInterface";
import {CollectionInterface} from "./collectionInterface";
import redis from "../../helper";

export * from "./repositoryInterface"
export * from "./modelInterface"
export * from "./collectionInterface"

export interface ResourceInterface<T> extends ModelInterface<T>, CollectionInterface<T> {
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
