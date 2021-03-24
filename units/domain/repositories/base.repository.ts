import { IBaseRepository } from "../../../common/repositories/interfaces/base.interface";
import { Result } from "../../../common/Result";
import { IUnit } from "../entities/unit.interface";

export abstract class UnitRepository implements IBaseRepository<IUnit> {

    collection: IUnit[];

    constructor(){
        this.collection = []
    }

    load(): Promise<Result<IUnit[]>> {
        throw new Error("Method not implemented.");
    }

    create(item: IUnit): Promise<Result<IUnit>> {
        throw new Error("Method not implemented.");
    }

    update(uid: string, item: IUnit): Promise<Result<IUnit>> {
        throw new Error("Method not implemented.");
    }

    delete(uid: string): Promise<Result<IUnit>> {
        throw new Error("Method not implemented.");
    }

    find(item: IUnit): Promise<Result<IUnit>> {
        throw new Error("Method not implemented.");
    }
    
    findOne(uid: string): Promise<Result<IUnit>> {
        throw new Error("Method not implemented.");
    }
}