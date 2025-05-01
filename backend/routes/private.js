import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/listar', async (req, res) => {
    try {
        const user = await prisma.user.findMany(); // traz todos os usuários
        res.status(200).json(user);
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        res.status(500).json({ message: 'Erro ao listar usuários' });
    }
}
    
    );

export default router;