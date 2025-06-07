const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || 'padaria_segura';

module.exports = {
  async login(req, res) {
    const { cpf, senha } = req.body;

    const funcionario = await prisma.funcionario.findUnique({ where: { cpf } });
    if (!funcionario) {
      return res.status(404).json({ error: 'Funcionário não encontrado' });
    }

    const senhaValida = await bcrypt.compare(senha, funcionario.senha);
    if (!senhaValida) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    const token = jwt.sign(
      { id: funcionario.id, nome: funcionario.nome, cargo: funcionario.cargo },
      SECRET,
      { expiresIn: '8h' }
    );

    res.json({ token });
  }
};
