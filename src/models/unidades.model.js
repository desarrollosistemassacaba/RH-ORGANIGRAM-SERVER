const mongoose = require("mongoose");

const unidadSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    uppercase: true,
    maxlength: [150, "El nombre no puede exceder los 150 caracteres."],
  },
  clasificacion: {
    type: String,
    required: true,
    uppercase: true,
    enum: ["SUSTANTIVO", "ADMINISTRATIVO"],
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
    required: true,
  },
});

unidadSchema.index({ nombre: 1 });

module.exports = mongoose.model("Unidades", unidadSchema);
