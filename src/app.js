const express = require('express');
const cors = require('cors');
const app = express();

const clienteRoutes = require('./routes/clienteRoutes');

app.use(cors());
app.use(express.json());

app.use('/clientes', clienteRoutes);

const produtoRoutes = require('./routes/produtoRoutes');
app.use('/produtos', produtoRoutes);
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);



module.exports = app;
