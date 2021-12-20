const operacionSuma = require("./suma.js")
const operacionResta = require("./resta.js")
const operacionMultiplicacion = require("./multiplicacion.js")
const operacionDivision = require("./division.js")



console.log(operacionSuma(4, 5));
console.log(operacionResta(10, 6));
console.log(operacionMultiplicacion(5, 2));
console.log(operacionDivision(10, 2));


let datosEnJson = '[{"name":"Argentina","capital":"Buenos Aires","región":"Americas"}]'
let datosConvertidos = JSON.parse(datosEnJson)
console.table(datosConvertidos)