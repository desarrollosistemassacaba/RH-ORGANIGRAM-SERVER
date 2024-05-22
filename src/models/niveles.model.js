const mongoose = require("mongoose");

const nivelesSchema = new mongoose.Schema({
  nombre: {
    type: Number,
    required: [true, "El número descriptivo es requerido."],
    maxlength: [2, "El número descriptivo no debe contener mas de 2 dígitos."],
  },
  haber_basico: {
    type: Number,
    require: [true, "El haber básico es obligatorio."],
  },
  cns: {
    type: Number,
    require: [true, "El campo es obligatorio."],
  },
  solidario: {
    type: Number,
    require: [true, "El campo es obligatorio."],
  },
  provivienda: {
    type: Number,
    require: [true, "El campo es obligatorio."],
  },
  profesional: {
    type: Number,
    require: [true, "El campo es obligatorio."],
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
    //required: [true, "Debe iniciar sesión"],
  },
});

nivelesSchema.index({ nombre: 1, gestion: 1 });

module.exports = mongoose.model("Niveles", nivelesSchema);
