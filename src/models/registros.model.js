const mongoose = require("mongoose");

const registroSchema = new mongoose.Schema({
  tipo: {
    type: String,
    //required: [true, "El tipo de registro es requerido."],
    uppercase: true,
    enum: ["RENUNCIA", "RESOLUCION", "ROTACION", "REASIGNACION", "ASCENSO"],
  },
  fecha_ingreso: {
    type: Date,
    required: [true, "Fecha de ingreso es requerido."],
  },
  fecha_conclusion: {
    type: Date,
    required: [true, "Fecha de conclusión es requerido."],
  },
  historico: [
    {
      id_cargo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cargos",
      },
      fecha_inicio: {
        type: Date,
        default: Date.now,
      },
      fecha_final: {
        type: Date,
      },
    },
  ],
  estado: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  id_funcionario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Funcionarios",
    required: [true, "El ID del funcionario es requerido."],
  },
  id_cargo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cargos",
    required: [true, "El ID del cargo es requerido."],
  },
  id_usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuarios",
    //required: [true, "El ID del usuario es requerido."],
  },
});

module.exports = mongoose.model("Registros", registroSchema);
