const Cargo = require("../models/cargos.model");
const Registro = require("../models/registros.model");
const controller = require("./controller");

const referencia = ["id_nivel_salarial"];

const valores = {
  nombre: 1,
  contrato: 1,
  registro: 1,
  estado: 1,
  id_cargo_superior: 1,
};
//enviamos valores para cambiarlos, es decir, id_nivel_salarial.nombre pasara a llamarse nivel y su valor tambien se enviara a nivel, lo mismo para sigla,. Teniendo en cuenta que es opcional el cambio.
const changeMap = {
  id_nivel_salarial: { field: "nivel", prop: "nombre" },
};

async function getElementos(req, res) {
  await controller.getAll(
    Cargo,
    req,
    res,
    "cargos",
    referencia,
    valores,
    changeMap
  );
}

//valores para obtener el registro de funcionarios
async function getElemento(req, res) {
  const reference = ["id_cargo", "id_funcionario", "historico.id_cargo"];
  await controller.getById(Registro, req, res, "Registro", reference);
  //   const referencia = [
  //     "id_partida",
  //     "id_nivel_salarial",
  //     "id_dependencia",
  //     "id_unidad",
  //   ];
  //   await controller.getById(Cargo, req, res, "Cargo", referencia);
}

//por ejemplo, si requiero filtrar el campo id_nivel_salarias, y este contiene el campo nombre, puedo realizar el filtrado dentro de ese campo.

/*funcionalidades del campo getCampoFiltrado(esquema, request, response, nombre en el mensaje de respuesta, campos _id de los cuales se requieren sus campos, devuelve solo los campos seleccionados, crea nuevos campos con nombres personalizados con los valores de los campos que se requieren, devuelve todos los elementos cuyo campo estado son true o false)
 */

async function getCampoFiltrado(req, res) {
  await controller.getByFilterCamp(
    Cargo,
    req,
    res,
    "cargos",
    referencia,
    valores,
    changeMap,
    true
  );
}

async function getElementoFiltrado(req, res) {}

async function createElemento(req, res) {}

async function updateElemento(req, res) {}

async function deleteElemento(req, res) {}

module.exports = {
  getElementos,
  getElemento,
  getElementoFiltrado,
  getCampoFiltrado,
  createElemento,
  updateElemento,
  deleteElemento,
};
