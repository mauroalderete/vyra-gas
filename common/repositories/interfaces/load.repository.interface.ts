import { Result } from "../../Result";

export interface ILoadRepository<T> {
    load(): Promise<Result<T[]>>
}