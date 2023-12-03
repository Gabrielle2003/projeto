const VendedorModel = require("../models/VendedorModel");
const Vendedores = [];
const Vendedor = require("../Vendedor");

class VendedorController {
  static async cadastrar(req, res) {
    if(req.body._id == ""){
      
    const novoVendedor = new VendedorModel({
      id: req.body.id,
      nome: req.body.nome,
      email: req.body.email
     
    });
    await novoVendedor.save();
      res.redirect("/vendedores?s=1");
    } else {
      await VendedorModel.findOneAndUpdate({_id: req.body._id},
        {
          nome: req.body.nome,
          idade: req.body.idade,
          email: req.body.email

        });
        res.redirect("/vendedores?s=3")
    }
  }

  static async listar(req, res) {
    const status = req.query.s;
    const vendedores = await VendedorModel.find();

    res.render("vendedor/relatorio", { vendedores, status });
  }

  static async detalhar(req, res) {
    const id = req.params.id;
    const vendedor = await VendedorModel.findOne({ id: id });
    res.render("vendedor/detalhar", { vendedor });
  }

  static async cadastrarGet(req, res) {
    const id = req.params.id;
    const vendedor = {};
    res.render("vendedor/cadastrar", { vendedor });
  }

  static async remover(req, res) {
    const id = req.params.id;
    await VendedorModel.findOneAndDelete({ id: id });
    res.redirect("/vendedores?s=2");
  }

  static async atualizar(req, res) {
    const id = req.params.id;
    const vendedor = await VendedorModel.findOne({ id: id });
    res.render("vendedor/cadastrar", { vendedor });
  }
  
}

module.exports = VendedorController;