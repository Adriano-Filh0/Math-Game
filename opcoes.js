function soma() {
    a= Math.floor(Math.random()*(10));
    b= Math.floor(Math.random()*(10));
}

function opcoes() {
    for(let g=0;g<4;g++){
    
    opcoes_ale[g]=opcoes[Math.floor(Math.random()*(opcoes.length-1))];

    for(let j=0;j<opcoes.length;j++){
        if(opcoes_ale[g]==opcoes[j]){
            opcoes.splice(j, 1);
        }
    }
}  
}


//botao tela menu
function botao_start(){
    soma();
    opcoes();
    i=1; 
}

//botao tela1
function botao_1() {
    console.log("botão 1");
    soma();
    i++;
}

function botao_2() {
    console.log("botão 2");
}

function botao_3() {
    console.log("botão 3");
}

function botao_4() {
    console.log("botão 4");
}

//botão voltar tela0
function botao_volta_menu() {
    image(botao_x,20,20,25,25);
}