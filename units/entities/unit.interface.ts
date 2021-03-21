import { ISymbolValuObject, SymbolValueObject } from "../valueObjects/symbol.valueObject"
import { IUIDValuObject, UIDValueObject } from "../valueObjects/uid.valueObject"
import { IUnitValuObject, UnitValueObject } from "../valueObjects/unit.valueObject"

export interface IUnit {
    uid: IUIDValuObject,
    unit: IUnitValuObject,
    symbol: ISymbolValuObject
}
