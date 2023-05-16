function criaArquivo(conteudo){

    let titulo = "teste";

    let blob = new Blob([conteudo],
        {
        type: "text/plain;charset=utf-8"
        
        });
    saveAs(blob, titulo + ".txt");

/*
    const fs = require('fs');

    fs.writeFile("c:\\Users\\jonatas.andrade\\Desktop\\devfuturo\\exercicio2\\src\\files\\meuarquivo.txt", conteudo, function(erro) {

    if(erro) {
        throw erro;
    }

    console.log("Arquivo salvo");
    */
 
}