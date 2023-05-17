const express = require("express");
const app = express();
const fs = require('fs');

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/createFile", function(req, res){
    
    var conteudo = req.body;
    fs.writeFile("c:\\Users\\jonatas.andrade\\Desktop\\devfuturo\\exercicio2\\src\\files\\meuarquivo.txt", conteudo, function(erro) {
    if(erro) {
        throw erro;
    }
    console.log("Arquivo salvo");
});

app.listen(8080,()=>{console.log("ta rodando")});