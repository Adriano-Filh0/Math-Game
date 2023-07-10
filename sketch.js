//Link video menu jogo:
//https://youtu.be/R-YwPFDcW1I
//link colab:
//http://colabeduc.org/projeto/show/1591

// variavel para a borda dos botões do menu.
let borda;
//variavel para a borda dos botões da tela1.
let bordax;
let borday;
//imagens para fundo
let fundo;
let fundo1;
let fundo2;
let fundo3;

let  botao_x;
//tela atual
let tela = 0;
//variaveis de posição, altura e largura.
let x;
let y;
let h;
let l;
// variaveis do jogo.
var a;
var b;
//variaveis vetores.
var op_1=a+b;
var op_2=a+b-1;
var op_3=(a+b)*2;
var op_4=(a+b)/2;
//contador
let i=1;

//vetores para aleatorização das opçoes
/*
var opcoes=[a+b,a+b-1,(a+b)*2,(a+b)/2];
var opcoes_ale=[];
*/
/*var opcoes=[1,a+b-1,(a+b)*2,(a+b)/2];
var opcoes_ale=[];*/
var opcoes=[op_1,op_2,op_3,op_4];
var opcoes_ale=[];


function preload() {
  fundo=loadImage("tela_menu.png");
  fundo1=loadImage("tela_fase1.png");
  fundo2=loadImage("tela_instruções.png");
  fundo3=loadImage("tela_creditos.png");

  botao_x=loadImage("X.png");
}

function setup() {
  createCanvas(400,400);
}

function draw() {
  noStroke();

  if(tela==0){
    menu();
    } else if(tela==1){
        fase1();
        opcoes();
      } else if(tela==2){
        instrucoes();
        } else if(tela==3){
          creditos();
          } else if(tela==4){
            vitoria();
            }
}