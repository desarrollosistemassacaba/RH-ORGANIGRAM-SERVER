const Nivel = require("../models/niveles.model");
const controller = require("./controller");

async function getElementos(req, res) {
  await controller.getAll(Nivel, req, res, "niveles");
}

async function getElemento(req, res) {
  await controller.getById(Nivel, req, res, "Nivel");
}

async function getCampoFiltrado(req, res) {
  await controller.getByFilterCamp(Nivel, req, res, "niveles");
}

async function getElementoFiltrado(req, res) {
  await controller.getByFilter(Nivel, req, res, "niveles");
}

async function createElemento(req, res) {
  await controller.create(Nivel, req, res, "Nivel");
}

async function updateElemento(req, res) {
  await controller.update(Nivel, req, res, "Nivel");
}

async function deleteElemento(req, res) {
  await controller.remove(Nivel, req, res, "Nivel");
}

async function getCampoFiltrado(req, res) {
  const referencia = [
    "id_partida",
    "id_nivel_salarial",
    "id_dependencia",
    "id_unidad",
    "id_cargo_superior",
    "id_cargo_dependiente",
  ];
  const options = {
    path: "id_nivel_salarial",
    match: { nombre: "1" },
    select: "_id, nombre", // Opcional: solo selecciona el _id del nivel salarial
  };
  await controller.getFilterElement(Cargo, res, "cargos", options);
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
