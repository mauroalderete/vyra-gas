export interface IDomainService<T> {
    exec() : Promise<T>
}