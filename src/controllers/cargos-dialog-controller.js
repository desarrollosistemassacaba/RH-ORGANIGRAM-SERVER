const Cargo = require("../models/cargos.model");
const controller = require("./controller");

const referencia = ["id_nivel_salarial", "id_dependencia"];

const valores = {
  nombre: 1,
  contrato: 1,
  registro: 1,
  estado: 1,
  id_nivel_salarial: 1,
  id_dependencia: 1,
  cargo_principal: 1,
  id_cargo_superior: 1,
};
//enviamos valores para cambiarlos, es decir, id_nivel_salarial.nombre pasara a llamarse nivel y su valor tambien se enviara a nivel, lo mismo para sigla,. Teniendo en cuenta que es opcional el cambio.
const changeMap = {
  id_nivel_salarial: { field: "nivel", prop: "nombre" },
  id_dependencia: { field: "sigla", prop: "sigla" },
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

async function getElemento(req, res) {
  const referencia = [
    "id_partida",
    "id_nivel_salarial",
    "id_dependencia",
    "id_unidad",
  ];
  await controller.getById(Cargo, req, res, "Cargo", referencia);
}

//por ejemplo, si requiero filtrar el campo id_nivel_salarias, y este contiene el campo nombre, puedo realizar el filtrado dentro de ese campo.
async function getCampoFiltrado(req, res) {
  await controller.getByFilterCamp(
    Cargo,
    req,
    res,
    "cargos",
    referencia,
    valores,
    changeMap
  );
}

async function getElementoFiltrado(req, res) {
  await controller.getByFilter(
    Cargo,
    req,
    res,
    "cargos",
    referencia,
    valores,
    changeMap
  );
}

async function createElemento(req, res) {
  await controller.create(Cargo, req, res, "Cargo");
}

async function updateElemento(req, res) {
  await controller.update(Cargo, req, res, "Cargo");
}

async function deleteElemento(req, res) {
  await controller.remove(Cargo, req, res, "Cargo");
}

module.exports = {
  getElementos,
  getElemento,
  getElementoFiltrado,
  getCampoFiltrado,
  createElemento,
  updateElemento,
  deleteElemento,
};
