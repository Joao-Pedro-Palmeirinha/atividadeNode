const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Bem-vindo!');
    } else if (req.url === '/sobre') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Aqui estão algumas informações sobre mim.');
    } else if (req.url === '/contato') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Meu numero de contato: 420028922');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página não encontrada');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});