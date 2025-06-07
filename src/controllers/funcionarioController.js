const bcrypt = require('bcryptjs');

const store = async (req, res) => {
  const { nome, cpf, telefone, email, cargo, dataContratacao, salario, senha } = req.body;

  const hash = await bcrypt.hash(senha, 8);

  const funcionario = await prisma.funcionario.create({
    data: { nome, cpf, telefone, email, cargo, dataContratacao: new Date(dataContratacao), salario, senha: hash }
  });

  res.status(201).json(funcionario);
};

module.exports = { store };
