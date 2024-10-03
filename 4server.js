const http = require('http');

const server = http.createServer((req, res) => {
    const urlParts = req.url.split('/');
    
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Bem-vindo!');
    } else if (urlParts[1] === 'saudacao' && urlParts[2]) {
        const nome = urlParts[2];
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Olá, ${nome}!`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página não encontrada');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
