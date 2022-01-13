function jasmine(){
    
    let escolha = prompt("Escolha entre 1 ou 2 para continuar");

    if (escolha == 1){
        location.replace("jasminefasefinal.html");
    }
    else if(escolha ==2){
        location.replace("jasminegameover02.html");
    }else{
        alert("OPÇÃO INVÁLIDA! Digite 1 ou 2 para continuar")
    }
}