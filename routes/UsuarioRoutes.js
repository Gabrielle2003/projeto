const express = require("express");
const routes = express.Router();

const auth = require("../middlewares/usuarioAuth");

const usuarioController = require("../controllers/UsuarioController");

routes.post("/usuarios", usuarioController.cadastrar);
routes.get("/usuarios", auth, usuarioController.listar);
routes.get("/usuarios/cadastrar", usuarioController.cadastrarGet);
routes.get("/usuarios/remover/:id", auth, usuarioController.remover);
routes.get("/usuarios/atualizar/:id", auth, usuarioController.atualizar);

routes.post("/usuarios/login", usuarioController.loginPost);
routes.get("/usuarios/login", usuarioController.loginGet);
routes.get("/usuarios/logout", usuarioController.logOut);

routes.get("/usuarios/:id", usuarioController.detalhar);


module.exports = routes;
