const addProductById = async (req, res) => {
  try {
    const findUser = await UserSchema.findById(req.params.id); // busca o usuario pelo ID

    if (findUser) {
      findUser.name = req.body.name || findUser.name;
      findUser.email = req.body.email || findUser.email;
    } // busca name ou email do usuario do id selecionado

    const savedUser = await findUser.save(); // salva as alteraçoes

    res.status(200).json({
      message: "Usuário atualizada com sucesso!",
      savedUser, // salva
    });
  } catch (error) {
    console.error(error); // exibe o erro
  }
};

const getProduct = async (req, res) => {
  UserSchema.find(function (err, users) {
    if (err) {
      res.status(500).send({ message: err.message });
    }
    res.status(200).send(users);
  });
};

module.exports = {
  addProductById,
  getProduct,
}; // expor
