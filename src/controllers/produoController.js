const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async index(req, res) {
    const produtos = await prisma.produto.findMany({
      include: { categoria: true }
    });
    res.json(produtos);
  },

  async store(req, res) {
    const { nome, descricao, preco, categoriaId } = req.body;
    try {
      const produto = await prisma.produto.create({
        data: { nome, descricao, preco, categoriaId }
      });
      res.status(201).json(produto);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async show(req, res) {
    const { id } = req.params;
    const produto = await prisma.produto.findUnique({ where: { id: Number(id) } });
    if (!produto) return res.status(404).json({ error: 'Produto não encontrado' });
    res.json(produto);
  },

  async update(req, res) {
    const { id } = req.params;
    const { nome, descricao, preco, categoriaId } = req.body;
    try {
      const produto = await prisma.produto.update({
        where: { id: Number(id) },
        data: { nome, descricao, preco, categoriaId }
      });
      res.json(produto);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async destroy(req, res) {
    const { id } = req.params;
    try {
      await prisma.produto.delete({ where: { id: Number(id) } });
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};
