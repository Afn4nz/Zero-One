'use strict' 

function d2b(num) { 
return num.toString(2); }
/*This function is used for the conversion of decimal to binary*/


document.getElementById('d2bb').addEventListener('click', function() {
  var val = document.getElementById('d2b').value; /*number enterd*/
  var maxL=10;

  if(isNaN(val)){          /*valdait if input wasnt a number*/
  document.getElementById('d2b_result').innerHTML = 'Somthing Wrong! try again';}

   else if (val === '') {   /*valdait if text feild is empty*/
    document.getElementById('d2b_result').innerHTML = 'Somthing Wrong! try again';
    }

    else if (val.length> maxL){  /*valdait input length*/
    document.getElementById('d2b_result').innerHTML = 'Somthing Wrong! try again';
    } 

    else if (val.indexOf(".")!=-1) {  /*since we only accept integers*/
      document.getElementById('d2b_result').innerHTML = 'Somthing Wrong! try again';
    } 
    else if (val.indexOf(" ")!=-1){ /*if it was white space*/
    document.getElementById('d2b_result').innerHTML = 'Somthing Wrong! try again';
    }

    else {  /*all good*/
    document.getElementById('d2b_result').innerHTML = d2b(parseInt(val)); }

    });