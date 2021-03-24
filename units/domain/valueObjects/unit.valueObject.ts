import { Result } from "../../../common/Result"

export interface IUnitValuObject{
    value: string
}

export class UnitValueObject implements IUnitValuObject {

    readonly value: string

    private constructor(value: IUnitValuObject){
        this.value = value.value
    }

    public static create(value: IUnitValuObject): Result<IUnitValuObject>{

        let result: Result<IUnitValuObject> = this.validate(value)
        if(!result.isSuccess){
            return Result.fail<IUnitValuObject>(`Unit is not valid ${result.error}`)
        }

        return Result.ok<IUnitValuObject>(value)
    }

    public static validate(value: IUnitValuObject): Result<IUnitValuObject> {

        if(value.value === null){
            return Result.fail<IUnitValuObject>(`Unit is null`)
        }
        if(value.value === undefined){
            return Result.fail<IUnitValuObject>(`Unit is undefined`)
        }
        if(value.value === ""){
            return Result.fail<IUnitValuObject>(`Unit is empty`)
        }

        return Result.ok<IUnitValuObject>(value)
    }

}
