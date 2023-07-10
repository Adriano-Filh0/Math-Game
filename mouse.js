//mouse tela0
function mouseMoved() {
  if(tela==0){
    if(mouseX>=x && mouseX<=x+l && mouseY>=y && mouseY<=y+h){
      borda = y;
      } else if(mouseX>=x && mouseX<=x+l && mouseY>=y+55 && mouseY<=y+h+55){
        borda = y+55;
        } else if(mouseX>=x && mouseX<=x+l && mouseY>=y+55 && mouseY<=y+h+55+55){
          borda = y+55+55;
          } 
  //mouse tela1
    } else if(tela==1){
        if(mouseX>=x && mouseX<=x+l && mouseY>=y && mouseY<=y+h){
          bordax = x;
          borday = y;
          } else if(mouseX>=x && mouseX<=x+l && mouseY>=y+55 && mouseY<=y+55+h){
            bordax = x;
            borday = y+55;
            } else if(mouseX>=x+165 && mouseX<=x+165+l && mouseY>=y && mouseY<=y+h){
              bordax = x+165;
              borday = y;
              } else if(mouseX>=x+165 && mouseX<=x+165+l && mouseY>=y+55 && mouseY<=y+55+h){
                bordax = x+165;
                borday = y+55;
                }
    //mouse tela2
      } else if(tela==2){
        //sem nada por enquandto
        }

}

function mouseClicked() {
  //mouse Menu
  if(tela==0){
    if(mouseX>=x && mouseX<=x+l && mouseY>=y && mouseY<=y+h){
      tela=1;
      botao_start(); 
      } else if(mouseX>=x && mouseX<=x+l && mouseY>=y+55 && mouseY<=y+h+55){
          tela=2;
        } else if(mouseX>=x && mouseX<=x+l && mouseY>=y+55+55 && mouseY<=y+h+55+55){
            tela=3;
          }
    
  //mouse tela1
    } else if(tela==1){
        if(mouseX>=x && mouseX<=x+l && mouseY>=y && mouseY<=y+h){
          botao_1();
          } else if(mouseX>=x && mouseX<=x+l && mouseY>=y+55 && mouseY<=y+55+h){
              botao_2();
            } else if(mouseX>=x+165 && mouseX<=x+165+l && mouseY>=y && mouseY<=y+h){
                botao_3();
              } else if(mouseX>=x+165 && mouseX<=x+165+l && mouseY>=y+55 && mouseY<=y+55+h){
                  botao_4();
                }
      }

//botão para voltar pro menu 
if(tela>0){
  if(mouseX>=20 && mouseX<=45 && mouseY>=20 && mouseY<=45){
    console.log("botão home");
    tela=0;
    }
  }   
}