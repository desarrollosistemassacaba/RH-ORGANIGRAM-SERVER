const Funcionario = require("../models/funcionarios.model");
const controller = require("./controller");

async function getElementos(req, res) {
  await controller.getAll(Funcionario, req, res, "funcionarios");
}

async function getElemento(req, res) {
  await controller.getById(Funcionario, req, res, "Funcionario");
}

async function getCampoFiltrado(req, res) {
  await controller.getByFilterCamp(
    Funcionario,
    req,
    res,
    "funcionarios",
    referencia
  );
}

async function getElementoFiltrado(req, res) {
  await controller.getByFilter(Funcionario, req, res, "funcionarios");
}

async function createElemento(req, res) {
  await controller.create(Funcionario, req, res, "Funcionario");
}

async function updateElemento(req, res) {
  const evaluarCampos = [
    "paterno",
    "materno",
    "casada",
    "ext",
    "telefono",
    // "correo",
    // "domicilio.zona",
    // "domicilio.pasaje",
    // "domicilio.calle",
    // "domicilio.numero_casa",
  ];
  await controller.update(Funcionario, req, res, "Funcionario", evaluarCampos);
}

async function deleteElemento(req, res) {
  await controller.remove(Funcionario, req, res, "Funcionario");
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
