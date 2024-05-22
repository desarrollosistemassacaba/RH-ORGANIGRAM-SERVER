const Registro = require("../models/registros.model");
const controller = require("./controller");

async function getElementos(req, res) {
  const referencia = ["id_funcionario", "id_cargo", "historico.id_cargo"];
  await controller.getAll(Registro, req, res, "registros", referencia);
}

async function getElemento(req, res) {
  const referencia = ["id_cargo", "historico.id_cargo"];
  await controller.getById(Registro, req, res, "Registro", referencia);
}

async function getCampoFiltrado(req, res) {
  const referencia = ["id_cargo", "historico.id_cargo"];
  await controller.getByFilterCamp(Registro, req, res, "registros");
}

async function getElementoFiltrado(req, res) {
  await controller.getByFilter(Registro, req, res, "registros");
}

async function createElemento(req, res) {
  await controller.create(Registro, req, res, "Registro");
}

async function updateElemento(req, res) {
  await controller.update(Registro, req, res, "Registro");
}

async function deleteElemento(req, res) {
  await controller.remove(Registro, req, res, "Registro");
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
