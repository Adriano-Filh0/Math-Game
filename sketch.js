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

//sons do jogo
let musica_fundo;
let resposta_certa;
let resposta_errada;

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
//contador
let i=1;

//vetores para aleatorização das opçoes
var opcoes_vetor;
var opcoes_ale;


function preload() {
  fundo=loadImage("image/tela_menu.png");
  fundo1=loadImage("image/tela_fase1.png");
  fundo2=loadImage("image/tela_instruções.png");
  fundo3=loadImage("image/tela_creditos.png");
  botao_x=loadImage("image/X.png");

  soundFormats('mp3');
  musica_fundo=
  resposta_certa=loadSound("music/Som_resposta _certa.mp3");
  resposta_errada=loadSound("music/Som_resposta _errada.mp3");
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
      } else if(tela==2){
        instrucoes();
        } else if(tela==3){
          creditos();
          } else if(tela==4){
            vitoria();
            }
}