//teclado Menu
function keyPressed() {
    if(tela==0){
      if(borda==y){
        if(keyCode === DOWN_ARROW){
          borda = y+55;
          }
        } else if(borda==y+55){
          if(keyCode === UP_ARROW){
            borda = y;
            } else if(keyCode === DOWN_ARROW){
              borda = y+55+55;
              }
          } else if(borda==y+55+55){
            if(keyCode === UP_ARROW){
              borda=y+55;
              }
            } else{
              if(keyCode === UP_ARROW){
                borda=y;
                }
              }
      
    if(keyCode === ENTER){
        if(borda==y){
          tela=1;
          botao_start();
          } else if(borda==y+55){
            tela=2;
            } else if(borda==y+55+55){
              tela=3;
              }
      }
    }
  //teclado tela1
    if(tela==1){
      if(bordax==x && borday==y){
        if(keyCode === RIGHT_ARROW){
            bordax = x+165;
            borday = y;
            } else if(keyCode === DOWN_ARROW){
              bordax = x;
              borday = y+55;
              }
        } else if(bordax==x+165 && borday==y){
          if(keyCode === LEFT_ARROW){
              bordax = x;
              borday = y;
              } else if(keyCode === DOWN_ARROW){
                bordax = x+165;
                borday = y+55;
                }
          } else if(bordax==x+165 && borday==y+55){
              if(keyCode === UP_ARROW){
                  bordax = x+165;
                  borday = y;
                  } else if(keyCode === LEFT_ARROW){
                    bordax = x;
                    borday = y+55;
                    }
            }else if(bordax==x && borday==y+55){
              if(keyCode === UP_ARROW){
                bordax = x;
                borday = y;
                } else if(keyCode === RIGHT_ARROW){
                  bordax = x+165;
                  borday = y+55;
                  }
              } else if(keyCode === UP_ARROW){
                  bordax = x;
                  borday = y;
                }
      
      if(keyCode === ENTER){
        if(bordax==x && borday==y){
          botao_1();
          } else if(bordax==x+165 && borday==y){
            botao_2();
            } else if(bordax==x+165 && borday==y+55){
              botao_3();
              } else if(bordax==x && borday==y+55){
                botao_4();
                }
        }
} 

//tecla para voltar pro menu 
if(tela>0){
  if(keyCode === ESCAPE){
    console.log("botão home");
    tela=0
    }
  }

}