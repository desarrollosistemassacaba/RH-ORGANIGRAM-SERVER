const express = require("express");
const router = express.Router();

const { rutas } = require("./routerUtils");
const {
  validarPartida,
  validarDependencia,
  validarUnidad,
  validarDescuento,
  validarNivel,
  validarDistrito,
  validarDepartamento,
  validarFuncionario,
  validarUsuario,
  validarCargo,
  validarRegistro,
  validarDetalle,
} = require("../middlewares/validacionCreate");
const {
  validarActualizacionPartida,
  validarActualizacionDependencia,
  validarActualizacionUnidad,
  validarActualizacionDescuento,
  validarActualizacionNivel,
  validarActualizacionDepartamento,
  validarActualizacionDistrito,
  validarActualizacionFuncionario,
  validarActualizacionUsuario,
  validarActualizacionCargo,
  validarActualizacionRegistro,
  validarActualizacionDetalle,
} = require("../middlewares/validacionUpdate");

// Rutas para Dependencias
rutas(
  router,
  "dependencia",
  validarDependencia,
  validarActualizacionDependencia
);

// Rutas para Partidas
rutas(router, "partida", validarPartida, validarActualizacionPartida);

// Rutas para Unidades
rutas(router, "unidad", validarUnidad, validarActualizacionUnidad);

// Rutas para Descuento
rutas(router, "descuento", validarDescuento, validarActualizacionDescuento);

// Rutas para Niveles
rutas(router, "nivel", validarNivel, validarActualizacionNivel);

// Rutas para Departamentos
rutas(
  router,
  "departamento",
  validarDepartamento,
  validarActualizacionDepartamento
);

// Rutas para Distritos
rutas(router, "distrito", validarDistrito, validarActualizacionDistrito);

// Rutas para Funcionarios
rutas(
  router,
  "funcionario",
  validarFuncionario,
  validarActualizacionFuncionario
);

// Rutas para Usuarios
rutas(router, "usuario", validarUsuario, validarActualizacionUsuario);

// Rutas para Cargos
rutas(router, "cargo", validarCargo, validarActualizacionCargo);

// Rutas para organigrama
rutas(router, "organization", validarCargo, validarActualizacionCargo);

// Rutas para Registros
rutas(router, "registro", validarRegistro, validarActualizacionRegistro);

// Rutas para Detalles
rutas(router, "detalle", validarDetalle, validarActualizacionDetalle);

module.exports = router;

// router.get(
//   "/salario/fecha/:inicio/:fin",
//   salariosController.getSalarioFilterDate
// );
