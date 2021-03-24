import { IBaseRepository } from "../../../common/repositories/interfaces/repository.interface";
import { IUnitsCollection } from "../entities/units.collection.interface";
import { IUnit } from "../entities/unit.interface";

export interface IUnitRepository extends IBaseRepository<IUnit> {

    collection: IUnitsCollection

    load(): Promise<IUnitsCollection>;

}