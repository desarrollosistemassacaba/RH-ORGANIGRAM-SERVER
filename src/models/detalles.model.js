const mongoose = require("mongoose");

const detallesSchema = new mongoose.Schema({
  titulo: {
    type: String,
    uppercase: true,
    maxlength: [100, "El título no puede exceder los 100 caracteres."],
  },
  documentos: [
    {
      type: String,
      uppercase: true,
    },
  ],
  id_funcionario: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("Listados", detallesSchema);
