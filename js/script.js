

let mat ='Non sei  buono in matematica!?';
 alert(mat);

 let taran ='Ti piace tarantino?';

prompt(taran);


function uno(){
   const number = document.getElementById("resultado").value+= 1;
  


}
function dos(){
   const number = document.getElementById("resultado").value+= 2;
  


}

function tres(){
  const number = document.getElementById("resultado").value+= 3;
  


}
function cuatro(){
    const number = document.getElementById("resultado").value+= 4;
  


}
function cinco(){
 const number = document.getElementById("resultado").value+= 5;
}

function seis(){
    const number = document.getElementById("resultado").value+= 6;
}

function siete(){
    const number = document.getElementById("resultado").value+= 7;
}

function ocho(){
   const number = document.getElementById("resultado").value+= 8;
}
function nueve(){
    const number = document.getElementById("resultado").value+= 9;
}

function cero(){
    var resultado = document.getElementById("resultado").value+= 0;
}
function summa(){
    var resultado = document.getElementById("resultado").value+= '+';
}





function resta(){
    var resultado = document.getElementById("resultado").value+= '-';
}

function mult(){
   document.getElementById("resultado").value+= '*';
}

function punto(){
     document.getElementById("resultado").value+= '.';
}



function cancel(){
    document.getElementById("resultado").value= "";
}

function borrar(){
    document.getElementById("resultado").value+= "";
}
function pot(){
   document.getElementById("resultado").value+= '(^)';
}
function raiz(){
    document.getElementById("resultado").value+= '(√)';
}

function divi(){
  document.getElementById("resultado").value+= '%';
}


function igual(){
    if (document.getElementById('resultado').value == ""){
        alert( "inserici il numero");
    }

    else {
        document.getElementById('resultado').value = eval ( document.getElementById('resultado').value);
    }
}


