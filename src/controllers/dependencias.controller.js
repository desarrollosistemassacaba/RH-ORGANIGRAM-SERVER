// dependencia.controller.js
const Dependencia = require("../models/dependencias.model");
const controller = require("./controller");

async function getElementos(req, res) {
  const referencia = ["id_dependencia"];
  await controller.getAll(Dependencia, req, res, "dependencias", referencia);
}

async function getElemento(req, res) {
  const referencia = ["id_dependencia"];
  await controller.getById(Dependencia, req, res, "Dependencia", referencia);
}

async function getCampoFiltrado(req, res) {
  const referencia = ["id_dependencia"];
  await controller.getByFilterCamp(
    Dependencia,
    req,
    res,
    "dependencias",
    referencia
  );
}

async function getElementoFiltrado(req, res) {
  const referencia = ["id_dependencia"];
  await controller.getByFilter(
    Dependencia,
    req,
    res,
    "Dependencia",
    referencia
  );
}

async function createElemento(req, res) {
  await controller.create(Dependencia, req, res, "Dependencia");
}

async function updateElemento(req, res) {
  const evaluarCampos = ["id_dependencia"];
  await controller.update(Dependencia, req, res, "Dependencia", evaluarCampos);
}

async function deleteElemento(req, res) {
  await controller.remove(Dependencia, req, res, "Dependencia");
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
