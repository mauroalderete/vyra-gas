import { Result } from "../../common/Result"
import { ISymbolValuObject, SymbolValueObject } from "../valueObjects/symbol.valueObject"
import { IUIDValuObject, UIDValueObject } from "../valueObjects/uid.valueObject"
import { IUnitValuObject, UnitValueObject } from "../valueObjects/unit.valueObject"
import { IUnit } from "./unit.interface"

export class Unit implements IUnit{
    readonly uid: IUIDValuObject
    readonly unit: IUnitValuObject
    readonly symbol: ISymbolValuObject

    private constructor(unit: IUnit){
        this.uid = unit.uid
        this.unit = unit.unit
        this.symbol = unit.symbol
    }

    public static create(uid: string, unit: string, symbol: string): Result<Unit>{

        let validationResult: Result<null> = this.validate(uid, unit, symbol)
        if(!validationResult.isSuccess){
            return Result.fail<Unit>(`Create unit failed. ${validationResult.error}`)
        }

        return Result.ok<Unit>( new Unit( {
            uid: { value: uid },
            unit: { value: unit },
            symbol: { value: symbol },
        } ) )
    }

    public static validate(uid: string, unit: string, symbol: string): Result<null>{

        let uidResult : Result<IUIDValuObject> = UIDValueObject.create({value: uid})
        let unitResult : Result<IUnitValuObject> = UnitValueObject.create({value: unit})
        let symbolResult : Result<ISymbolValuObject> = SymbolValueObject.create({value: symbol})

        if (!uidResult.isSuccess){
            return Result.fail<null>(`Unit invalid. ${uidResult.error}`)
        }
        if (!unitResult.isSuccess){
            return Result.fail<null>(`Unit invalid. ${unitResult.error}`)
        }
        if (!symbolResult.isSuccess){
            return Result.fail<null>(`Unit invalid. ${symbolResult.error}`)
        }

        return Result.ok<null>(null)
    }    
}