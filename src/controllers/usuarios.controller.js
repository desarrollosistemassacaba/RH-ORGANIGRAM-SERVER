const Usuario = require("../models/usuarios.model");
const controller = require("./controller");

async function getElementos(req, res) {
  const referencia = ["id_funcionario"];
  await controller.getAll(Usuario, req, res, "usuarios", referencia);
}

async function getElemento(req, res) {
  const referencia = ["id_funcionario"];
  await controller.getById(Usuario, req, res, "Usuario", referencia);
}

async function getCampoFiltrado(req, res) {
  const referencia = ["id_funcionario"];
  await controller.getByFilterCamp(Usuario, req, res, "usuarios", referencia);
}

async function getElementoFiltrado(req, res) {
  await controller.getByFilter(Usuario, req, res, "usuarios");
}

async function createElemento(req, res) {
  await controller.create(Usuario, req, res, "Usuario");
}

async function updateElemento(req, res) {
  await controller.update(Usuario, req, res, "Usuario");
}

async function deleteElemento(req, res) {
  await controller.remove(Usuario, req, res, "Usuario");
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
