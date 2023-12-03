const express = require("express");
const routes = express.Router();

const auth = require("../middlewares/usuarioAuth");

const vendedorController = require("../controllers/VendedorController");

routes.post("/vendedores", auth, vendedorController.cadastrar);
routes.get("/vendedores", auth, vendedorController.listar);
routes.get("/vendedores/cadastrar", auth, vendedorController.cadastrarGet);
routes.get("/vendedores/:id", auth, vendedorController.detalhar);
routes.get("/vendedores/remover/:id", auth, vendedorController.remover);
routes.get("/vendedores/atualizar/:id", auth, vendedorController.atualizar);

module.exports = routes;