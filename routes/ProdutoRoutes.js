const express = require("express");
const routes = express.Router();

const auth = require("../middlewares/usuarioAuth");

const produtoController = require("../controllers/ProdutoController");

routes.post("/produtos", auth, produtoController.cadastrar);
routes.get("/produtos", auth, produtoController.listar);
routes.get("/produtos/cadastrar", auth, produtoController.cadastrarGet);
routes.get("/produtos/:id", auth, produtoController.detalhar);
routes.get("/produtos/remover/:id", auth, produtoController.remover);
routes.get("/produtos/atualizar/:id", auth, produtoController.atualizar);

module.exports = routes;