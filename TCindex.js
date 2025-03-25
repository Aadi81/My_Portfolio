function optionDisplay(){
   let x= document.getElementById('option').value;
   document.getElementById('display').value = x;
   if(x=='Not Eligible'){
    let amt1='100-/';
    document.getElementById('AmtDisplay').value=amt1;
   }
   else if(x=='Age Less then 5 year'){
    let amt2='0-/';
    document.getElementById('AmtDisplay').value=amt2;
   }
   else if(x=='Age between 5 to 18 year'){
    let amt3='20-/';
    document.getElementById('AmtDisplay').value=amt3;
   }
   else if(x=='Age Greater than 60 year'){
    let amt4='5-/';
    document.getElementById('AmtDisplay').value=amt4;
   }
   else{
    document.getElementById('AmtDisplay').value="";
   }
}
function optionDisplay2(){
    let x= document.getElementById('option').value;
    document.getElementById('display').value = x;
    if(x=='Not Eligible'){
     let amt1='50-/';
     document.getElementById('AmtDisplay').value=amt1;
    }
    else if(x=='Age Less then 5 year'){
     let amt2='0-/';
     document.getElementById('AmtDisplay').value=amt2;
    }
    else if(x=='Age between 5 to 18 year'){
     let amt3='10-/';
     document.getElementById('AmtDisplay').value=amt3;
    }
    else if(x=='Age Greater than 60 year'){
     let amt4='0-/';
     document.getElementById('AmtDisplay').value=amt4;
    }
    else{
     document.getElementById('AmtDisplay').value="";
    }
 }
 function optionDisplay3(){
   let x= document.getElementById('option').value;
   document.getElementById('display').value = x;
   if(x=='Not Eligible'){
    let amt1='5-/';
    document.getElementById('AmtDisplay').value=amt1;
   }
   else if(x=='Age Less then 5 year'){
    let amt2='0-/';
    document.getElementById('AmtDisplay').value=amt2;
   }
   else if(x=='Age Greater than 35 year'){
    let amt4='0-/';
    document.getElementById('AmtDisplay').value=amt4;
   }
   else{
    document.getElementById('AmtDisplay').value="";
   }
}