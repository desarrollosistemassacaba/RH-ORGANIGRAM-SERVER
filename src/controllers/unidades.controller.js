const Unidad = require("../models/unidades.model");
const controller = require("./controller");

const referencia = ["id_dependencia"];
const valores = {};
const changeMap = {
  id_dependencia: { field: "sigla", prop: "sigla" },
};

async function getElementos(req, res) {
  await controller.getAll(
    Unidad,
    req,
    res,
    "unidades",
    referencia,
    valores,
    changeMap
  );
}

async function getElemento(req, res) {
  await controller.getById(Unidad, req, res, "Unidad", referencia);
}

async function getCampoFiltrado(req, res) {
  await controller.getByFilterCamp(
    Unidad,
    req,
    res,
    "unidades",
    referencia,
    valores,
    changeMap
  );
}

async function getElementoFiltrado(req, res) {
  await controller.getByFilter(Unidad, req, res, "unidades", referencia);
}

async function createElemento(req, res) {
  await controller.create(Unidad, req, res, "Unidad");
}

async function updateElemento(req, res) {
  await controller.update(Unidad, req, res, "Unidad", referencia);
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
