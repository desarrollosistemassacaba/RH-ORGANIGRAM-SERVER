const mongoose = require("mongoose");

const distritoSchema = new mongoose.Schema({
  codigo: {
    type: Number,
    unique: [true, "Ya se tiene registrado este código."],
    required: [true, "El código es requerido."],
  },
  distrito: {
    type: String,
    uppercase: true,
    required: [true, "El distrito es requerido."],
    maxlength: [50, "El distrito no puede exceder los 50 caracteres."],
  },
  estado: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  id_departamento: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Departamentos",
  },
});

distritoSchema.index({ codigo: 1, distrito: 1 });
module.exports = mongoose.model("Distritos", distritoSchema);
