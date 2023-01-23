//const client = require("../config/procedures");
//
//client
//  .query("CALL usp_SelectLoginUsuario('teste@teste', 'senhateste', 1);") // status OUTPUT
//  .then((res) => {
//    console.log("Procedure usp_SelectLoginUsuario executada com sucesso", res);
//  })
//  .catch((err) => {
//    console.log("Erro ao executar procedure usp_SelectLoginUsuario", err);
//  });
//
//client
//  .query(
//    "CALL usp_CadastroLoginUsuario('teste@teste', 'senhateste', 'nometeste');"
//  )
//  .then((res) => {
//    console.log(
//      "Procedure usp_CadastroLoginUsuario executada com sucesso",
//      res
//    );
//  })
//  .catch((err) => {
//    console.log("Erro ao executar procedure usp_CadastroLoginUsuario", err);
//  });
//
//client
//  .query("CALL usp_AddCarrinho(@_PAR_CodUsuaruio_IN, @_PAR_CodProduto_IN);")
//  .then((res) => {
//    console.log("Procedure usp_AddCarrinho executada com sucesso", res);
//  })
//  .catch((err) => {
//    console.log("Erro ao executar procedure usp_AddCarrinho", err);
//  });
//
//client
//  .query("CALL usp_SELECTCarrinho(@_PAR_CodUsuaruio_IN);")
//  .then((res) => {
//    console.log("Procedure usp_SELECTCarrinho executada com sucesso", res);
//  })
//  .catch((err) => {
//    console.log("Erro ao executar procedure usp_SELECTCarrinho", err);
//  });
//
//client
//  .query(
//    "CALL usp_AddProduto(@_PAR_Nome_VC, @_PAR_Descricao_VC, @_PAR_CaminhoImg_VC, @_PAR_Valor_MN);"
//  )
//  .then((res) => {
//    console.log("Procedure usp_AddProduto executada com sucesso", res);
//  })
//  .catch((err) => {
//    console.log("Erro ao executar procedure uusp_AddProduto", err);
//  });
//
//client.end();
//
