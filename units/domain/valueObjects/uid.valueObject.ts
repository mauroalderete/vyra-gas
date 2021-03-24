import { Result } from "../../../common/Result"

export interface IUIDValuObject{
    value: string
}

export class UIDValueObject implements IUIDValuObject{

    readonly value: string

    private constructor(value: IUIDValuObject){
        this.value = value.value
    }

    public static create(value: IUIDValuObject): Result<IUIDValuObject>{

        let result: Result<IUIDValuObject> = this.validate(value)
        if(!result.isSuccess){
            return Result.fail<IUIDValuObject>(`UID is not valid ${result.error}`)
        }

        return Result.ok<IUIDValuObject>(value)
    }

    public static validate(value: IUIDValuObject): Result<IUIDValuObject> {

        if(value.value === null){
            return Result.fail<IUIDValuObject>(`UID is null`)
        }
        if(value.value === undefined){
            return Result.fail<IUIDValuObject>(`UID is undefined`)
        }
        if(value.value === ""){
            return Result.fail<IUIDValuObject>(`UID is empty`)
        }

        return Result.ok<IUIDValuObject>(value)
    }

}
