function verificaURL(){
    var url_site = new URL(window.location);
    var valor_url = url_site.searchParams.get("codigo");
    //alert(url_site);
    if(valor_url == 1){
        document.getElementById("nome").value = "JONATAS VIANA ANDRADE";
        document.getElementById("telefone").value = "(51)99700-5052";
        document.getElementById("cep").value = "93046-804";
        document.getElementById("email").value = "jonatas@gmail.com";
    }
    if(valor_url == 2){
        document.getElementById("nome").value = "EDSON ARANTES DO NASCIMENTO";
        document.getElementById("telefone").value = "(11)99710-1000";
        document.getElementById("cep").value = "93046-804";
        document.getElementById("email").value = "pele@gmail.com";   
    }
    if(valor_url == 3){
        document.getElementById("nome").value = "RONALDO DE ASSIS MOREIRA";
        document.getElementById("telefone").value = "(51)99710-1010";
        document.getElementById("cep").value = "93046-804";
        document.getElementById("email").value = "r10@gmail.com";      
    }
    
    

}  
verificaURL();