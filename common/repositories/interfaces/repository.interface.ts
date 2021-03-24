import { ILoadRepository } from "./load.repository.interface";
import { IReadRepository } from "./read.repository.interface";
import { IWriteRepository } from "./write.repository.interface";

export interface IBaseRepository<T> extends ILoadRepository<T>, IWriteRepository<T>, IReadRepository<T> {
    collection: T[]
}