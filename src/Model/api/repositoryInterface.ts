import { ModelInterface } from "./modelInterface";

export interface RepositoryInterface<T> extends ModelInterface<T> {
  getAll: () => Promise<T[]>;
}
