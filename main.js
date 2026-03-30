const express = require('express');
const app = express();
const PORTA = 3000;

const nome = "Luiz Felipe";
const turma = "2DS";
const curso = "Desenvolvimento de Sistemas";

app.get('/mensagem', (req, res) => {
    res.send("Servidor funcionando!");
});

app.get('/aluno', (req, res) => {
    const resposta = `
        Nome: ${nome} <br>
        Turma: ${turma} <br>
        Curso: ${curso}
    `;
    res.send(resposta);
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});