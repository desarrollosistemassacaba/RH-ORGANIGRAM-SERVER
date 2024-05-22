const Partida = require("../models/partidas.model");
const controller = require("./controller");

async function getElementos(req, res) {
  await controller.getAll(Partida, req, res, "partidas");
}

async function getElemento(req, res) {
  await controller.getById(Partida, req, res, "Partida");
}

async function getCampoFiltrado(req, res) {
  await controller.getByFilterCamp(Partida, req, res, "partidas");
}

async function getElementoFiltrado(req, res) {
  await controller.getByFilter(Partida, req, res, "partidas");
}

async function createElemento(req, res) {
  console.log(req.params.value);
  await controller.create(Partida, req, res, "Partida");
}

async function updateElemento(req, res) {
  const evaluarCampos = ["monto_refuerzo"];
  await controller.update(Partida, req, res, "Partida", evaluarCampos);
}

async function deleteElemento(req, res) {
  await controller.remove(Partida, req, res, "Partida");
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
