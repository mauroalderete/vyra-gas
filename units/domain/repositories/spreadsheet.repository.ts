import { Result } from "../../../common/result.common";
import { Unit } from "../entities/unit.entity";
import { IUnit } from "../entities/unit.interface";
import { IUnitsCollection } from "../entities/units.collection.interface";
import { IUnitRepository } from "./unit.repository";

export class UnitSpreadsheetRepository implements IUnitRepository {

    private id: string
    private sheetName: string

    private spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet
    private sheet: GoogleAppsScript.Spreadsheet.Sheet

    readonly collection: IUnitsCollection;

    constructor(id: string, sheetName: string){
        
        this.collection = []

        this.id = id
        this.sheetName = sheetName
    }
    
    load(): Promise<IUnitsCollection> {

        return new Promise( (resolve, reject) => {
            try {
                this.spreadsheet = SpreadsheetApp.openById(this.id)
            } catch(e: any){
                reject( `Open SpreadSheet fail. ${e["message"]}` )
            }

            try{
                this.sheet = this.spreadsheet.getSheetByName(this.sheetName)
            } catch (e: any){
                reject( `Open sheet fail. ${e["message"]}` )                
            }

            let data = this.sheet.getDataRange().getValues()

            for( let i in data){

                if(i == "0"){
                    continue;
                }

                let row = data[i]

                let id: string = row[0]
                let unit: string = row[1]
                let symbol: string = row[2]

                let result: Result<Unit> = Unit.create(id, unit, symbol )

                if (!result.isSuccess){
                    reject(result.error)
                }

                this.collection.push( result.getValue() )

            }

            resolve( this.collection )
        } )
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