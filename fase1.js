function fase1 (){
    background(fundo1);
    textSize(30);
    
    x= 25;
    y= 250;
    l= 160;
    h= 50;
    
    //botoes
    fill(220,220,220);
    rect(x,y,l,h);
    rect(x+165,y,l,h);
    rect(x,y+55,l,h);
    rect(x+165,y+55,l,h);
    
    //testo jogo tela1
    textAlign(CENTER);
    text(a+" + "+b+" = ?",160,140);
    fill(0);
    text(Math.floor(opcoes_ale[0]),x+80,y+35);
    text(Math.floor(opcoes_ale[1]),x+80+165,y+35);
    text(Math.floor(opcoes_ale[2]),x+80,y+35+55);
    text(Math.floor(opcoes_ale[3]),x+80+165,y+35+55);
      
    botao_volta_menu();
    //borda
    noFill();
    stroke(0,0,0);
    strokeWeight(3);
    rect(bordax,borday,l,h);
  
  if(i==5){
    tela=4;
  }
}

