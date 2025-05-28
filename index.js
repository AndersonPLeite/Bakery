import express from 'express';
import publicRoutes from './backend/routes/public.js';
import privateRoutes from './backend/routes/private.js';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import auth from './backend/middlewares/auth.js';

const prisma = new PrismaClient();

async function main() {
    const users = await prisma.user.findMany(); // Traz todos os usuários
    await prisma.$connect();
}

main()
    .catch(e => {
        console.error('Erro ao conectar ao banco de dados:', e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });


const app = express();
app.use(express.json()); // Middleware para analisar o corpo da requisição como JSON

app.use('/', publicRoutes);
app.use('/', auth ,  privateRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

//3 rotas cadastro login listar