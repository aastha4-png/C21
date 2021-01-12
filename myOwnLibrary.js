/*function isTouching(){
 if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
   // movingRect.shapeColor = "red";
   // fixedRect.shapeColor = "red";
    return true;
  }
  else {
    //movingRect.shapeColor = "green";
    //fixedRect.shapeColor = "green";
    return false;
  }
}*/

function isTouching(movingRect,game1){
 if (movingRect.x - game1.x < game1.width/2 + movingRect.width/2
      && game1.x - movingRect.x < game1.width/2 + movingRect.width/2
      && movingRect.y - game1.y < game1.height/2 + movingRect.height/2
      && game1.y - movingRect.y < game1.height/2 + movingRect.height/2) {
   // movingRect.shapeColor = "red";
   // fixedRect.shapeColor = "red";
    return true;
  }
  else {
    //movingRect.shapeColor = "green";
    //fixedRect.shapeColor = "green";
    return false;
  }
}

function bounceOff(game1,game2)
{
if (game1.x - game2.x < game2.width/2 +game1.width/2
      && game2.x - game1.x < game2.width/2 + game1.width/2)
      {
        game1.velocityX = game1.velocityX * (-1);
        game2.velocityX = game2.velocityX * (-1);
      }
if(game1.y - game2.y < game2.height/2 + game1.height/2
      && game2.y -game1.y < game2.height/2 + game1.height/2)
      {
         game1.velocityY = game1.velocityY * (-1);
        game2.velocityY = game2.velocityY * (-1);
      }
}
