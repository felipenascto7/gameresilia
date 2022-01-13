function jasmine(){
    
    let escolha = prompt("Escolha entre 1 ou 2 para continuar");

    if (escolha == 1){
        location.replace("jasminegameover01.html");
    }
    else if(escolha ==2){
        location.replace("jasminefase02.html");
    }else{
        alert("OPÇÃO INVÁLIDA! Digite 1 ou 2 para continuar")
    }
}