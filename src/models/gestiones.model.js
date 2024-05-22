const mongoose = require("mongoose");

const gestionSchema = new mongoose.Schema({
  gestion: {
    type: Date,
    required: [true, "La gestion es requerida."],
  },
  codigo: {
    type: Number,
    required: [true, "El código es obligatorio."],
    maxlength: [8, "El código no debe contener mas de 8 dígitos."],
  },
  fuente: {
    type: Number,
    required: [true, "La fuente es requerida."],
    maxlength: [3, "La fuente debe contener como máximo 3 dígitos."],
  },
  organismo: {
    type: Number,
    required: [true, "El organismo es requerido."],
    maxlength: [4, "El organismo debe contener como máximo 4 dígitos."],
  },
  monto_asignado: {
    type: Number,
    require: [true, "El monto asignado es obligatorio."],
  },
  monto_refuerzo: {
    type: Number,
  },
  tipo: {
    type: String,
    uppercase: true,
    maxlength: [50, "El tipo de gasto no debe exceder los 50 caracteres."],
  },
  estado: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  id_usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuarios",
    required: [true, "Debe iniciar sesión"],
  },
});

gestionSchema.index({ codigo: 1 });

module.exports = mongoose.model("Gestiones", gestionSchema);
