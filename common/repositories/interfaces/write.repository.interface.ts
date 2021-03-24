import { Result } from "../../result.common";

export interface IWriteRepository<T> {
    create(item: T): Promise<Result<T>>
    update(uid: string, item: T): Promise<Result<T>>
    delete(uid: string): Promise<Result<T>>
}