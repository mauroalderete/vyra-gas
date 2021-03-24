import { IUnitsCollection } from "./units/domain/entities/units.collection.interface"
import { UnitSpreadsheetRepository } from "./units/domain/repositories/spreadsheet.repository"

function test() {

  Logger.log("Iniciando test()")

  const id = "1BPGEDtDsiHKNfJylUFfEy9esnYY1If6SAKHW82psthA"
  const unidades = "unidades"
  
  let unitRepository: UnitSpreadsheetRepository

  unitRepository = new UnitSpreadsheetRepository(id, unidades)

  unitRepository.load().then( (collection: IUnitsCollection) => {
    Logger.log(`Todo salio bien.. Hay ${collection.length} unidades cargadas`)
  }, (reason) => {
    console.error(`Hubo un problema al cargar unidades: ${reason}`)
  } )

  Logger.log("Bye")
}
