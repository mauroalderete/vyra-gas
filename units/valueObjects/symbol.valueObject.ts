import { Result } from "../../common/Result"

export interface ISymbolValuObject{
    value: string
}

export class SymbolValueObject implements ISymbolValuObject {

    readonly value: string

    private constructor(value: ISymbolValuObject){
        this.value = value.value
    }

    public static create(value: ISymbolValuObject): Result<ISymbolValuObject>{

        let result: Result<ISymbolValuObject> = this.validate(value)
        if(!result.isSuccess){
            return Result.fail<ISymbolValuObject>(`Symbol is not valid, ${result.error}`)
        }

        return Result.ok<ISymbolValuObject>(value)
    }

    public static validate(value: ISymbolValuObject): Result<ISymbolValuObject> {

        if(value.value === null){
            return Result.fail<ISymbolValuObject>(`Symbol is null`)
        }
        if(value.value === undefined){
            return Result.fail<ISymbolValuObject>(`Symbol is undefined`)
        }
        if(value.value === ""){
            return Result.fail<ISymbolValuObject>(`Symbol is empty`)
        }

        if(value.value.length > 6){
            return Result.fail<ISymbolValuObject>(`Symbol "${value.value}" is too lenght. Symbol to be must 5 characters of lenght`)
        }

        return Result.ok<ISymbolValuObject>(value)
    }

}
