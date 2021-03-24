import { Result } from "../../result.common";

export interface IReadRepository<T> {
    find(item: T): Promise<Result<T>>
    findOne(uid: string): Promise<Result<T>>
}