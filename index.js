const express = require('express');
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true})); //CONFIGURA POST
app.use(express.static('public'));

const session = require("express-session");
app.use(session({
    secret:'ifpe',
    saveUninitialized: false,
    resave: false
}));

require('dotenv/config');

 const mongoose = require("mongoose");
 mongoose.connect(process.env.MONGO_URI);

const Produto = require("./Produto");
const produtoRoutes = require("./routes/ProdutoRoutes");
app.use(produtoRoutes);

const Vendedor = require("./Vendedor");
const vendedorRoutes = require("./routes/VendedorRoutes");
app.use(vendedorRoutes);

const Usuario = require("./Usuario");
const usuarioRoutes = require("./routes/UsuarioRoutes");
app.use(usuarioRoutes);

app.get("/", function(req, res){   
    if(req.session.usuario != null){ //logado
        res.render("index")
    } else{
        res.redirect("/usuarios/login")
    }
});

app.use(function(req, res){
    res.status(404).render("404");
});

app.listen(process.env.PORT, function(){
    console.log("Servidor Acionado!!!");
})