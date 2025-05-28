import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET 

const auth = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Bearer <token>
    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido' });
        }
        req.user = decoded; // Salva os dados do usuário decodificado na requisição
        next();
    });
};

export default auth;