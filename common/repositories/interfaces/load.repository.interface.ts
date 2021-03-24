import { Result } from "../../result.common";

export interface ILoadRepository<T> {
    load(): Promise<T[]>
}