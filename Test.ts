import { IDomainService } from "./common/domainServices/domainService.interface"
import { IUnitsCollection } from "./units/domain/entities/units.collection.interface"
import { UnitSpreadsheetRepository } from "./units/domain/repositories/spreadsheet.repository"
import { IUnitRepository } from "./units/domain/repositories/unit.repository"
import { IntegrityUnitsDomainService } from "./units/domain/services/integrity.services"

function test() {

  Logger.log("Iniciando test()")

  const id = "1BPGEDtDsiHKNfJylUFfEy9esnYY1If6SAKHW82psthA"
  const unidades = "unidades"
  
  let unitRepo: IUnitRepository
  unitRepo = new UnitSpreadsheetRepository(id, unidades)

  let unitIntegrity: IDomainService<IUnitsCollection>
  unitIntegrity = new IntegrityUnitsDomainService( unitRepo )

  unitIntegrity.exec().then( (collection: IUnitsCollection) => {
    Logger.log(`Todo salio bien.. Hay ${collection.length} unidades cargadas`)
  }, (reason) => {
    console.error(`Hubo un problema al cargar unidades: ${reason}`)
  } )

  Logger.log("Bye")
}
