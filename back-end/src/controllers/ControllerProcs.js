const express = require("express");
const router = express.Router();
const {
  createProcedureLoginUsuario,
  createProcedureCadastroUsuario,
  createProcedureAddCarrinho,
  createProcedureSelectCarrinho,
  createProcedureAddProduto,
} = require("../procs/procedure");

//router.post("/login",
const login = (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;

  pgClient.query(createProcedureLoginUsuario, [email, senha], (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      if (result.rows[0].status) {
        // login válido
        res.status(200).send("Login realizado com sucesso!");
      } else {
        // login inválido
        res.status(401).send("E-mail ou senha incorretos.");
      }
    }
  });
};

//router.post("/cadastro",
const cadastro = (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;
  const nome = req.body.nome;

  pgClient.query(
    createProcedureCadastroUsuario,
    [email, senha, nome],
    (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send("Cadastro realizado com sucesso!");
      }
    }
  );
};

//router.post("/addcarrinho",
const addCarrinho = (req, res) => {
  const codUsuario = req.body.codUsuario;
  const codProduto = req.body.codProduto;

  pgClient.query(
    createProcedureAddCarrinho,
    [codUsuario, codProduto],
    (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send("Produto adicionado ao carrinho com sucesso!");
      }
    }
  );
};

//router.get("/selectcarrinho",
const selectCarrinho = (req, res) => {
  const codUsuario = req.query.codUsuario;

  pgClient.query(createProcedureSelectCarrinho, [codUsuario], (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result.rows);
    }
  });
};

//router.post("/addproduto",
const addProduto = (req, res) => {
  const nome = req.body.nome;
  const descricao = req.body.descricao;
  const caminhoImg = req.body.caminhoImg;
  const valor = req.body.valor;

  pgClient.query(
    createProcedureAddProduto,
    [nome, descricao, caminhoImg, valor],
    (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send("Produto adicionado com sucesso!");
      }
    }
  );
};

module.exports = {
  login,
  cadastro,
  addCarrinho,
  selectCarrinho,
  addProduto,
};
