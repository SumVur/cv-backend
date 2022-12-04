export interface CollectionInterface<T> {
    getAllItems: () => Promise<T[]>
}