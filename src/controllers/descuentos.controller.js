const Descuento = require("../models/descuentos.model");
const controller = require("./controller");

async function getElementos(req, res) {
  await controller.getAll(Descuento, req, res, "descuentos");
}

async function getElemento(req, res) {
  await controller.getById(Descuento, req, res, "Descuento");
}

async function getCampoFiltrado(req, res) {
  const referencia = ["id_departamento"];
  await controller.getByFilterCamp(
    Descuento,
    req,
    res,
    "descuentos",
    referencia
  );
}

async function getElementoFiltrado(req, res) {
  await controller.getByFilter(Descuento, req, res, "Descuento");
}

async function createElemento(req, res) {
  await controller.create(Descuento, req, res, "Descuento");
}

async function updateElemento(req, res) {
  await controller.update(Descuento, req, res, "Descuento");
}

async function deleteElemento(req, res) {
  await controller.remove(Descuento, req, res, "Descuento");
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
