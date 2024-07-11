const mongoose = require("mongoose");

const departamentoSchema = new mongoose.Schema({
  provincia: {
    type: String,
    uppercase: true,
    required: [true, "La provincia es requerida."],
    maxlength: [50, "La provincia no puede exceder los 50 caracteres."],
  },
  departamento: {
    type: String,
    uppercase: true,
    required: [true, "El departamento es requerido."],
    maxlength: [50, "El departamento no puede exceder los 50 caracteres."],
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

departamentoSchema.index({ provincia: 1, departamento: 1 });

module.exports = mongoose.model("Departamentos", departamentoSchema);
