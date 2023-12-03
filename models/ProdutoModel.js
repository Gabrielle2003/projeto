const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const produtoSchema = Schema({
    id: Number, 
    nome: String,
    unidadeContagem: String,
    quantidade: Number
});

module.exports = mongoose.model("Produto", produtoSchema);
