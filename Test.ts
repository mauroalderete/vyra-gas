import { Result } from "./common/Result"
import { IUnit } from "./units/entities/unit.interface"
import { UnitSpreadsheetRepository } from "./units/repositories/spreadsheet.repository"

function test() {

  Logger.log("Iniciando test()")

  const id = "1BPGEDtDsiHKNfJylUFfEy9esnYY1If6SAKHW82psthA"
  const unidades = "unidades"
  
  let unitRepository: UnitSpreadsheetRepository

  unitRepository = new UnitSpreadsheetRepository(id, unidades)

  unitRepository.load().then( (result: Result<IUnit[]>) => {
    Logger.log(`Todo salio bien.. Hay ${result.getValue().length} unidades cargadas`)
  }, (reason) => {
    console.error(`Hubo un problema al cargar unidades: ${reason}`)
  } )

  Logger.log("Bye")
}
