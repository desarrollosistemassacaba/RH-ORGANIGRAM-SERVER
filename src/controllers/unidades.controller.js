const Unidad = require("../models/unidades.model");
const controller = require("./controller");

async function getElementos(req, res) {
  await controller.getAll(Unidad, req, res, "unidades");
}

async function getElemento(req, res) {
  await controller.getById(Unidad, req, res, "Unidad");
}

async function getCampoFiltrado(req, res) {
  await controller.getByFilterCamp(Unidad, req, res, "unidades");
}

async function getElementoFiltrado(req, res) {
  await controller.getByFilter(Unidad, req, res, "unidades");
}

async function createElemento(req, res) {
  await controller.create(Unidad, req, res, "Unidad");
}

async function updateElemento(req, res) {
  await controller.update(Unidad, req, res, "Unidad");
}

async function deleteElemento(req, res) {
  await controller.remove(Unidad, req, res, "Unidad");
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
