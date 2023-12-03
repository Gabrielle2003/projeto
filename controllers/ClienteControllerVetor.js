const VendedorModel = require("../models/VendedorModel");
const vendedores = [];
const Vendedor = require("../Vendedor");

class VendedorController {
  static cadastrar(req, res) {
    const vendedor = req.body;
    vendedores.push(new Vendedor(vendedor.id, vendedor.nome, vendedor.idade));
    res.redirect("/vendedores?s=1");
  }

  static listar(req, res) {
    const salvo = req.query.s;
    res.render("vendedor/relatorio", { vendedores, salvo });
  }

  static detalhar(req, res) {
    const id = req.params.id;
    for (const vendedor of vendedores) {
      if (vendedor.id == id) {
        res.render("vendedor/detalhar", { vendedor });
        break;
      }
    }
  }

  
  static cadastrarGet(req, res) {
      
    res.render("vendedor/cadastrar")
  }

}

module.exports = VendedorController;
