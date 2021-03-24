import { ISymbolValuObject } from "../valueObjects/symbol.valueObject"
import { IUIDValuObject } from "../valueObjects/uid.valueObject"
import { IUnitValuObject } from "../valueObjects/unit.valueObject"

export interface IUnit {
    uid: IUIDValuObject,
    unit: IUnitValuObject,
    symbol: ISymbolValuObject
}
