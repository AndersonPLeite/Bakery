const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async index(req, res) {
    const clientes = await prisma.cliente.findMany();
    res.json(clientes);
  },

  async store(req, res) {
    const { nome, email, telefone, endereco } = req.body;
    try {
      const cliente = await prisma.cliente.create({
        data: { nome, email, telefone, endereco }
      });
      res.status(201).json(cliente);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};
