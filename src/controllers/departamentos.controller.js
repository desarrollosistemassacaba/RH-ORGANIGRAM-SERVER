const Departamento = require("../models/departamentos.model");
const controller = require("./controller");

async function getElementos(req, res) {
  await controller.getAll(Departamento, res, "departamentos");
}

async function getElemento(req, res) {
  await controller.getById(Departamento, req, res, "Departamento");
}

async function getCampoFiltrado(req, res) {
  await controller.getByFilterCamp(
    Departamento,
    req,
    res,
    "departamentos",
    referencia
  );
}

async function getElementoFiltrado(req, res) {
  await controller.getByFilter(Departamento, req, res, "Departamento");
}

async function createElemento(req, res) {
  await controller.create(Departamento, req, res, "Departamento");
}

async function updateElemento(req, res) {
  await controller.update(Departamento, req, res, "Departamento");
}

async function deleteElemento(req, res) {
  await controller.delete(Departamento, req, res, "Departamento");
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
