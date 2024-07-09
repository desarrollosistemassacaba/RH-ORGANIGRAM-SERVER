const { validarSolicitud } = require("../middlewares/validacion");

const controladores = {
  dependencia: require("../controllers/dependencias.controller"),
  descuento: require("../controllers/descuentos.controller"),
  nivel: require("../controllers/niveles.controller"),
  distrito: require("../controllers/distritos.controller"),
  funcionario: require("../controllers/funcionarios.controller"),
  departamento: require("../controllers/departamentos.controller"),
  partida: require("../controllers/partidas.controller"),
  unidad: require("../controllers/unidades.controller"),
  usuario: require("../controllers/usuarios.controller"),
  cargo: require("../controllers/cargos.controller"),
  registro: require("../controllers/registros.controller"),
  organization: require("../controllers/organigrama.controller"),
  detalle: require("../controllers/detalles.controller"),
};

function rutas(router, controlador, validadorCrear, validadorActualizar) {
  // recordar que para agregar una nueva ruta, se debe agregar a todos los controladores la ruta con la funcionalidad, dado  que es una funcionalidad estandarizada para todos los controladores.

  router.get(`/${controlador}`, controladores[controlador].getElementos);
  router.get(`/${controlador}/:id`, controladores[controlador].getElemento);
  router.get(
    `/${controlador}/filtro/:campo/:value`,
    controladores[controlador].getElementoFiltrado
  );
  router.get(
    `/${controlador}/campo/:elemento/:campo/:value`,
    controladores[controlador].getCampoFiltrado
  );
  router.post(
    `/${controlador}`,
    validadorCrear(),
    validarSolicitud,
    controladores[controlador].createElemento
  );
  router.put(
    `/${controlador}/:id`,
    validadorActualizar(),
    validarSolicitud,
    controladores[controlador].updateElemento
  );
  router.delete(
    `/${controlador}/:id`,
    controladores[controlador].deleteElemento
  );
}
module.exports = { rutas };
