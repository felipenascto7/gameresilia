function pocahontas(){
    
    let escolha = prompt("Digite 1 ou 2 para continuar");

    if (escolha == 1){
        location.replace("pocafase02.html");
    }
    else if(escolha ==2){
        location.replace("pocagameover01.html");
    }else{
        alert("OPÇÃO INVÁLIDA! Digite 1 ou 2 para continuar")
    }
}