import {ModelInterface} from "./modelInterface";
import {CollectionInterface} from "./collectionInterface";

export * from "./repositoryInterface"
export * from "./modelInterface"
export * from "./collectionInterface"

export interface ResourceInterface<T> extends ModelInterface<T>, CollectionInterface<T> {
}