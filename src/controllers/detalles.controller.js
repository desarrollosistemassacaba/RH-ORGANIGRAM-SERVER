const Detalle = require("../models/detalles.model");
const controller = require("./controller");

async function getElementos(req, res) {
  await controller.getAll(Detalle, req, res, "detalles");
}

async function getElemento(req, res) {
  await controller.getById(Detalle, req, res, "Detalle");
}

async function getCampoFiltrado(req, res) {
  await controller.getByFilterCamp(Detalle, req, res, "detalles");
}

async function getElementoFiltrado(req, res) {
  await controller.getByFilter(Detalle, req, res, "detalles");
}

async function createElemento(req, res) {
  await controller.create(Detalle, req, res, "Detalle");
}

async function updateElemento(req, res) {
  await controller.update(Detalle, req, res, "Detalle");
}

async function deleteElemento(req, res) {
  await controller.remove(Detalle, req, res, "Detalle");
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
