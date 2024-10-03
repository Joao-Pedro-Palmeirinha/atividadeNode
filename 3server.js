const http = require('http');
const { gerarNumeroAleatorio } = require('./utils');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Bem-vindo!');
    } else if (req.url === '/numero') {
        const numero = gerarNumeroAleatorio();
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Número aleatório: ${numero}`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página não encontrada');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});