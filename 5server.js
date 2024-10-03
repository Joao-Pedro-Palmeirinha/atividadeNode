const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Bem-vindo!</h1>');
});

app.get('/api/data', (req, res) => {
    res.json({
        nome: 'Joao pedro',
        idade: 25,
        ocupacao: 'Desenvolvedor'
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express rodando na porta ${PORT}`);
});
