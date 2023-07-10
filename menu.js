function menu (){
    background(fundo);
  
    x=100;
    y=220;
    h=50;
    l=200;
    
    fill(220,220,220);
    //botão 1
    rect(x,y,l,h);
    //botão 2
    rect(x,y+55,l,h);
    //botão 3
    rect(x,y+55+55,l,h);
    //texto botões
    textSize(26);
    fill(0,0,0);
    textAlign(CENTER);
    text("Start",x+100,y+30);
    text("Instruções",x+100,y+90)
    text("Creditos",x+100,y+90+55);
    
    //texto nome do jogo
    textSize(40);
    text("MATH"+"\n"+"GAME",x+100,y-100);
    
    //borda
    noFill();
    stroke(0,0,0);
    strokeWeight(3);
    rect(x,borda,l,h);
  }