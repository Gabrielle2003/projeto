const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendedorSchema = Schema({
    id: Number, 
    nome: String,
    email: String
});

module.exports = mongoose.model("Vendedor", vendedorSchema);
