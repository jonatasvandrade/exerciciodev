function validarCPF(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}

function validarCNPJ(cnpj) {
 
    cnpj = cnpj.replace(/[^\d]+/g,'');
 
    if(cnpj == '') return false;
     
    if (cnpj.length != 14)
        return false;
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
         
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;
           
    return true;
    
}

function SelecionaDoc(tipodoc){
    if(tipodoc){	
        switch(tipodoc){
            case 'cpf':
                document.getElementById("box-cnpj").style.display ="none"
                document.getElementById("box-cpf").style.display ="block"
                break;
            case 'cnpj':
            document.getElementById("box-cpf").style.display ="none"
            document.getElementById("box-cnpj").style.display ="block"
            break;
            
        }
    }else{
        alert("Selecione um tipo de documento")

    }
    

}

function validaNome(){
    if(document.getElementById("nome").value != "" && length < 2){
        return true
        
    }else{
        return false	
    }
}

function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    //document.getElementById("msgemail").innerHTML="E-mail válido";
    //alert("email valido");
    return true
    }
    else{
    //document.getElementById("msgemail").innerHTML="<font color='red'>Email inválido </font>";
    //alert("E-mail invalido");
    return false
    }
}

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

  function gerarJSON(){
    const Jnome = document.getElementById("nome").value;
    const Jcpf = document.getElementById("cpf").value;
    //const Jcnpj = document.getElementById("cnpj").value;
    const Jtelefone = document.getElementById("telefone").value;
    const Jemail = document.getElementById("email").value;
    const Jcep = document.getElementById("nome").value;
    const Jrua = document.getElementById("cpf").value;
    //const Jnumero = document.getElementById("numero").value;
    const Jbairro = document.getElementById("bairro").value;
    const Jcidade = document.getElementById("cidade").value;
    const Jestado = document.getElementById("uf").value;

    const json = {
        nome: Jnome,
        cpfCnpj: Jcpf,
        email: Jemail,
        telefone: Jtelefone,
        cep: Jcep,
        rua: Jrua,
        //numero: Jnumero,
        bairro: Jbairro,
        cidade: Jcidade,
        uf: Jestado
    };
    localStorage.setItem('formulario', JSON.stringify(json));
    console.log(localStorage);
    return JSON.stringify(json);
}

function limpaFormulário(){
    document.getElementById("nome").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("cnpj").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("uf").value = "";
}

function validaForm(event){
    event.preventDefault()
    //alert("teste Form")
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var cnpj = document.getElementById("cnpj").value;
    var email = document.getElementById("email").value;
    var erroForm = 0;

    if(nome != "" && length < 2){
        //alert("nome verdadeiro")
        //("o nome é "+nome)
        
    }else{
        alert("nome Falso")
        document.getElementById("msg-erro").innerHTML="<font color='red'>nome inválido</font>";	
        erroForm = erroForm + 1;
    }
    //verifica cpf
    //alert("o CPF é"+cpf);

    if(cpf !== ""){
        var verificaCPF = validarCPF(cpf)
        //alert("valida cpf")
        if(verificaCPF){
            alert('CPF válido')
        }else{
            alert('cpf inválido')
            document.getElementById("msg-erro").innerHTML="<font color='red'>CPF inválido</font>";	
            erroForm = erroForm + 1;
        }
    }

    if(cnpj !== ""){
        var verificaCNPJ = validarCNPJ(cnpj)
        alert("valida cnpj")
        if(verificaCNPJ){
            alert('cnpj válido')
        }else{
            //alert('cnpj inválido')
            document.getElementById("msg-erro").innerHTML="<font color='red'>CNPJ inválido</font>";	
            erroForm = erroForm + 1;
        }
    }

    if(erroForm==0){
        var retornoJson = gerarJSON();
        var doc = preencheDoc(cpf,cnpj);
        criaArquivo(retornoJson,nome,doc);
        limpaFormulário();
        

    }else{
        alert("total de erros: "+erroForm)
        return;    
    }
    
     
    
}