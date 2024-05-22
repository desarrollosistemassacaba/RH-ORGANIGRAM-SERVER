const mongoose = require("mongoose");

const funcionarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es requerido."],
    uppercase: true,
    maxlength: [20, "En nombre no puede exceder los 20 caracteres."],
  },
  apellido_pa: {
    type: String,
    required: [true, "El apellido paterno es requerido."],
    uppercase: true,
    maxlength: [20, "El apellido paterno no puede exceder los 20 caracteres."],
  },
  apellido_ma: {
    type: String,
    uppercase: true,
    maxlength: [20, "El apellido materno no puede exceder los 20 caracteres."],
  },
  ci: {
    type: Number,
    required: [true, " El carnet de identidad es requerido."],
    maxlength: [
      10,
      "El carnet de identidad no puede exceder los 10 caracteres.",
    ],
  },
  ext: {
    type: String,
    uppercase: true,
    maxlength: [2, "La extensión no puede exceder los 2 caracteres."],
  },
  expedido: {
    type: String,
    require: [true, "El campo expedido es requerido"],
    uppercase: true,
    maxlength: [2, "El campo expedido no debe exceder los 3 caracteres"],
    enum: ["LP", "SC", "CB", "PT", "OR", "TJ", "CH", "BE", "PD"],
  },
  genero: {
    type: String,
    required: [true, "El género es requerido."],
    uppercase: true,
    enum: ["M", "F"],
  },
  correo: {
    type: String,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "El correo electrónico no es válido."],
    maxlength: [35, "El correo no debe exceder los 35 caracteres"],
  },
  telefono: {
    type: Number,
    maxlength: [10, "El número de teléfono no debe exceder las 10 cifras."],
  },
  domicilio: {
    distrito: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Distritos",
    },
    zona: {
      type: String,
      uppercase: true,
      maxlength: [50, "La zona no puede exceder los 50 caracteres."],
    },
    calle: {
      type: String,
      uppercase: true,
      maxlength: [50, "La calle no puede exceder los 50 caracteres."],
    },
    pasaje: {
      type: String,
      uppercase: true,
      maxlength: [50, "El pasaje no puede exceder los 50 caracteres."],
    },
    numero_casa: {
      type: Number,
      maxlength: [5, "El numero de casa no puede exceder los 5 dígitos."],
    },
    telefono_casa: {
      type: Number,
      maxlength: [10, "El numero de casa no puede exceder los 10 dígitos."],
    },
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

// Índices para mejorar la eficiencia de las consultas
funcionarioSchema.index({ nombre: 1, apellido_pa: 1, ci: 1, ext: 1 });

module.exports = mongoose.model("Funcionarios", funcionarioSchema);
