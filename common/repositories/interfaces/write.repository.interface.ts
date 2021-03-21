import { Result } from "../../Result";

export interface IWriteRepository<T> {
    create(item: T): Promise<Result<T>>
    update(uid: string, item: T): Promise<Result<T>>
    delete(uid: string): Promise<Result<T>>
}