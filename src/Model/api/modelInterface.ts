export interface ModelInterface<T> {
    getById(id: string): Promise<T | null>

    save(item: T): Promise<boolean>

    deleteById(id: string): Promise<boolean>

    modify(item: T): Promise<T>
}