function vyraLoad() {
  var datasourceFiles = {
    maestros: {}
  }
  datasourceFiles.maestros = SpreadsheetApp.openById("1BPGEDtDsiHKNfJylUFfEy9esnYY1If6SAKHW82psthA")

  var sheets = {
    marcas: {},
    unidades: {},
    productos: {}
  }

  sheets.marcas = datasourceFiles.maestros.getSheetByName("Marcas")
  sheets.unidades = datasourceFiles.maestros.getSheetByName("Unidades")
  sheets.productos = datasourceFiles.maestros.getSheetByName("Productos")
  
  Logger.log("Hi!!")
}
