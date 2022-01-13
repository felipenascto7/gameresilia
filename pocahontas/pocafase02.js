function pocahontas(){
    
    let escolha = prompt("Escolha entre 1 ou 2 para continuar");

    if (escolha == 1){
        location.replace("pocagameover02.html");
    }
    else if(escolha ==2){
        location.replace("pocafasefinal.html");
    }else{
        alert("OPÇÃO INVÁLIDA! Digite 1 ou 2 para continuar")
    }
}