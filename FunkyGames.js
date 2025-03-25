// let Jadunmbr=Math.round(Math.random()*2);  
// // it generate the value between 0 to 2 but it will be short term loop to play.
// Here you can set the range of the data.
// and also we make it for the globally acess this function of bat ball stump game.

function cChoice(){
    let Jadunmbr=Math.random()*3;
    let ComputerChoice;
   if(Jadunmbr>=0 && Jadunmbr<=1){
     ComputerChoice= 'Bat';
   }
   else if(Jadunmbr>1 && Jadunmbr<=2){
     ComputerChoice= 'Ball';
   }
   else if (Jadunmbr>2 && Jadunmbr<=3){
     ComputerChoice= 'Stump';
   }
   return ComputerChoice;
   }

// Rock paper Scissor
function RPSChoice(){
    let Jadunmbr=Math.random()*3;
    let ComputerChoice;
if(Jadunmbr>=0 && Jadunmbr<=1){
    ComputerChoice='Rock';
  }
  else if(Jadunmbr>1 && Jadunmbr<=2){
    ComputerChoice='Paper';
  }
  else if(Jadunmbr>2 && Jadunmbr<=3){
    ComputerChoice='Scissor';
  }
  return ComputerChoice;
}


//Here i make the object to access in the html page with the .operator.
   let Score={
    Win:0,
    Lost:0,
    Tie:0,
   };
    function board(){
   let boardfun= (`Win= '${Score.Win}'  Lose= '${Score.Lost}'  Tie= '${Score.Tie}'`);
   
   localStorage.setItem('Score',JSON.stringify(boardfun));
   return boardfun;

    }

function scoreReset(){
  sCoreR={
    Win:0,
    Lost:0,
    Tie:0,
   };
   localStorage.clear();
}
    
 
   