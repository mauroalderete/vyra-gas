import { IUnitsCollection } from "../entities/units.collection.interface";
import { IUnitRepository } from "../repositories/unit.repository";
import { IDomainService } from "../../../common/domainServices/domainService.interface"

export class IntegrityUnitsDomainService implements IDomainService<IUnitsCollection> {

    private unitRepo: IUnitRepository

    constructor(unitRepo: IUnitRepository){
        this.unitRepo = unitRepo
    }

    exec(): Promise<IUnitsCollection> {
        
        return new Promise( (resolve, reject) => {

            this.unitRepo.load().then( (collection: IUnitsCollection) => {

                // verificar la integridad de la coleccion de unidades
                // reglas de integridad
                // ID repetidos
                // Nombres de unidades repetidos
                // Simbolos repetidos
                

                resolve( collection )

            } ).catch( (reason: any) => {

                reject( `Fallo la integridad de las Unidades. ${reason}` )
            } )

        })        
    }

}