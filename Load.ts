interface IDatasourceSpreadsheets {
  maestros: GoogleAppsScript.Spreadsheet.Spreadsheet
}

interface IDatasourceSheets{
  marcas: GoogleAppsScript.Spreadsheet.Sheet,
  unidades: GoogleAppsScript.Spreadsheet.Sheet,
  productos: GoogleAppsScript.Spreadsheet.Sheet
}

function vyraLoad() {

  let datasourceFiles: IDatasourceSpreadsheets = {
    maestros: SpreadsheetApp.openById("1BPGEDtDsiHKNfJylUFfEy9esnYY1If6SAKHW82psthA")
  }

  let sheets: IDatasourceSheets = {
    marcas: datasourceFiles.maestros.getSheetByName("marcas"),
    unidades: datasourceFiles.maestros.getSheetByName("unidades"),
    productos: datasourceFiles.maestros.getSheetByName("productos"),
  }

  Logger.log("Hi from local dev stack with Typescript!!")
}
