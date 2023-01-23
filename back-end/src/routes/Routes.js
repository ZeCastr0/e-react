// Arquivo responsal por gerenciar as rotas

const express = require("express");
const router = express.Router();

const controllerProcs = require("../controllers/ControllerProcs"); // indica onde esta o arquivo de controllers

router.post("/login", controllerProcs.login);
router.post("/cadastro", controllerProcs.cadastro);
router.post("/addcarrinho", controllerProcs.addCarrinho);
router.get("/selectcarrinho", controllerProcs.selectCarrinho);
router.post("/addproduto", controllerProcs.addProduto);

module.exports = router; // deixa o arquivo despinivel para ser usado
