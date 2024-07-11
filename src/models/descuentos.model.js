const mongoose = require("mongoose");

const descuentoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    uppercase: true,
    maxlength: [50, "El nombre no puede exceder los 50 caracteres"],
  },
  gestion: {
    type: Date,
    required: [true, "La gestion es requerida."],
  },
  riesgo_comun: {
    type: Number,
  },
  afp: {
    type: Number,
  },
  riesgo_profesional: {
    type: Number,
  },
  aporte_solidario: {
    type: Number,
  },
  fonvi: {
    type: Number,
  },
  cns: {
    type: Number,
  },
  descripcion: {
    type: String,
    uppercase: true,
    maxlength: [200, "La descripción no puede exceder los 200 caracteres"],
  },
  estado: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

descuentoSchema.index({ gestion: 1 });

module.exports = mongoose.model("Descuentos", descuentoSchema);
