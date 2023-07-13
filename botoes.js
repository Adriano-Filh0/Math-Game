function soma() {
    a= Math.floor(Math.random()*(10));
    b= Math.floor(Math.random()*(10));

    opcoes_vetor=[a+b,a+b-1,a*2+b,a+b*2];
    opcoes_ale=[];

    for(let g=0;g<4;g++){
    
    opcoes_ale[g]=opcoes_vetor[Math.floor(Math.random()*(opcoes_vetor.length))];

    for(let j=0;j<opcoes_vetor.length;j++){
        if(opcoes_ale[g]==opcoes_vetor[j]){
            opcoes_vetor.splice(j, 1);
        }
    }
} 
}

//botao tela menu
function botao_start(){
    soma();
    i=1; 
}

//botao tela1
function botao_1() {
    console.log("botão 1");

    if(opcoes_ale[0]==a+b){
        soma();
        i++;
        resposta_certa.play();
    } else {
        resposta_errada.play();
    }

}

function botao_2() {
    console.log("botão 2");

    if(opcoes_ale[1]==a+b){
        soma();
        i++;
        resposta_certa.play();
    } else {
        resposta_errada.play();
    }
} 

function botao_3() {
    console.log("botão 3");

    if(opcoes_ale[2]==a+b){
        soma();
        i++;
        resposta_certa.play();
    } else {
        resposta_errada.play();
    }
} 

function botao_4() {
    console.log("botão 4");

    if(opcoes_ale[3]==a+b){
        soma();
        i++;
        resposta_certa.play();
    } else {
        resposta_errada.play();
    }
} 

//botão voltar tela0
function botao_volta_menu() {
    image(botao_x,20,20,25,25);
}