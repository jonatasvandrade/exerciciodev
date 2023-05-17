function criaArquivo(content,name,doc){

    let titulo = name+doc;

    let blob = new Blob([content],
        {
        type: "text/plain;charset=utf-8"
        
        });
    saveAs(blob, titulo + ".txt");

}

function  preencheDoc(cpf,cnpj){
    var doc;
    if(cpf !== ""){
        doc = cpf.replace(/[^\d]+/g,'');
    }else if(cnpj !== ""){
        doc = cnpj.replace(/[^\d]+/g,'');
    }else{
        doc = "00000"; 
    }
    return doc;
}