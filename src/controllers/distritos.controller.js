const Distrito = require("../models/distritos.model");
const controller = require("./controller");

async function getElementos(req, res) {
  const referencia = ["id_departamento"];
  await controller.getAll(Distrito, req, res, "distritos", referencia);
}

async function getElemento(req, res) {
  const referencia = ["id_departamento"];
  await controller.getById(Distrito, req, res, "Distrito", referencia);
}

async function getCampoFiltrado(req, res) {
  const referencia = ["id_departamento"];
  await controller.getByFilterCamp(Distrito, req, res, "distritos", referencia);
}

async function getElementoFiltrado(req, res) {
  await controller.getByFilter(Distrito, req, res, "Distrito");
}

async function createElemento(req, res) {
  await controller.create(Distrito, req, res, "Distrito");
}

async function updateElemento(req, res) {
  await controller.update(Distrito, req, res, "Distrito");
}

async function deleteElemento(req, res) {
  await controller.delete(Distrito, req, res, "Distrito");
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
