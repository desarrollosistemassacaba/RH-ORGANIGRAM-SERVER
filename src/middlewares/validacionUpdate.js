const {
  validarDependencia,
  validarUnidad,
  validarPartida,
  validarDescuento,
  validarNivel,
  validarDepartamento,
  validarDistrito,
  validarFuncionario,
  validarUsuario,
  validarCargo,
  validarRegistro,
} = require("./validacionCreate");

//requerido envia el valor de false con el objetivo de que los campos pasen a un valor no required y sean opcional, pero que a su vez no permita introducir campos null.
//actualizar habilita la funcion de actualizar y realizar las busquedas de los campos establecidos omitiendo su busqueda en si mismo, es decir, el valor del id a actualizar no sera verificado.

const requerido = false;
const actualizar = true;

function validarActualizacionDependencia() {
  return validarDependencia(requerido, actualizar);
}

function validarActualizacionUnidad() {
  return validarUnidad(requerido, actualizar);
}

function validarActualizacionPartida() {
  return validarPartida(requerido, actualizar);
}

function validarActualizacionDescuento() {
  return validarDescuento(requerido, actualizar);
}

function validarActualizacionNivel() {
  return validarNivel(requerido, actualizar);
}

function validarActualizacionDistrito() {
  return validarDistrito(requerido, actualizar);
}

function validarActualizacionDepartamento() {
  return validarDepartamento(requerido, actualizar);
}

function validarActualizacionFuncionario() {
  return validarFuncionario(requerido, actualizar);
}

function validarActualizacionUsuario() {
  return validarUsuario(requerido, actualizar);
}

function validarActualizacionCargo() {
  return validarCargo(requerido, actualizar);
}

function validarActualizacionRegistro() {
  return validarRegistro(requerido, actualizar);
}

module.exports = {
  validarActualizacionDependencia,
  validarActualizacionUnidad,
  validarActualizacionPartida,
  validarActualizacionDescuento,
  validarActualizacionNivel,
  validarActualizacionDepartamento,
  validarActualizacionDistrito,
  validarActualizacionFuncionario,
  validarActualizacionUsuario,
  validarActualizacionCargo,
  validarActualizacionRegistro,
};
