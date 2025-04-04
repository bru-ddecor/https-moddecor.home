const express = require('express'); // Importa o Express
const app = express(); // Inicia o servidor
const port = 80; //porta do servidor
// Servindo arquivos estáticos (HTML, CSS, JS, imagens)
app.use(express.static("public")); // Pasta onde está seu site

// Rota principal (abre o ex003.html)
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/ex003.html");
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://moddecor.home:${port}`);
});