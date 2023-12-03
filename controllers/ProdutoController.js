const ProdutoModel = require("../models/ProdutoModel");
const Produtos = [];
const Produto = require("../Produto");

class ProdutoController {
  static async cadastrar(req, res) {
    if(req.body._id == ""){
      
    const novoProduto = new ProdutoModel({
      id: req.body.id,
      nome: req.body.nome,
      unidadeContagem: req.body.unidadeContagem,
      quantidade: req.body.quantidade,
      

    });
    await novoProduto.save();
      res.redirect("/produtos?s=1");
    } else {
      await ProdutoModel.findOneAndUpdate({_id: req.body._id},
        {
          nome: req.body.nome,
          idade: req.body.idade,
          unidadeContagem: req.body.unidadeContagem,
          quantidade: req.body.quantidade,

        });
        res.redirect("/produtos?s=3")
    }
  }

  static async listar(req, res) {
    const status = req.query.s;
    const produtos = await ProdutoModel.find();

    res.render("produto/relatorio", { produtos, status });
  }

  static async detalhar(req, res) {
    const id = req.params.id;
    const produto = await ProdutoModel.findOne({ id: id });
    res.render("produto/detalhar", { produto });
  }

  static async cadastrarGet(req, res) {
    const id = req.params.id;
    const produto = {};
    res.render("produto/cadastrar", { produto });
  }

  static async remover(req, res) {
    const id = req.params.id;
    await ProdutoModel.findOneAndDelete({ id: id });
    res.redirect("/produtos?s=2");
  }

  static async atualizar(req, res) {
    let id = req.params.id;
    const produto = await ProdutoModel.findOne({ id: id });
    res.render("produto/cadastrar", { produto });
  }

}

module.exports = ProdutoController;