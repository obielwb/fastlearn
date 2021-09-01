const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    // res : Resposta
    // req: Pedido
    const file = req.url === '/' ? 'index.html' : req.url;
    const filePath = path.join(__dirname, '/views/', file);
    const extname = path.extname(filePath);

    const allowedFileTypes = ['.html', '.css', '.js'];
    const allowed = allowedFileTypes.find(item => item == extname);

    if (!allowed) return 

    fs.readFile(    
        filePath,
        (err, content) => {
            if (err) throw err

            res.end(content); // Se não houver erro, renderizar o conteúdo
        }
    )
}).listen(5000, () => console.log('Server is running'))