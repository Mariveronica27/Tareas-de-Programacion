var operandoA;
var operandoB;
var operacion;


function init(){
    //variables
    var Resultado = document.getElementById("Resultado");
    var reset = document.getElementById("reset");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
    
    //Eventos
    uno.onclick = function(e){
        Resultado.textContent = Resultado.textContent + "1";
    }
    dos.onclick = function(e){
        Resultado.textContent = Resultado.textContent + "2";
    }
    tres.onclick = function(e){
        Resultado.textContent = Resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        Resultado.textContent = Resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        Resultado.textContent = Resultado.textContent + "5";
    }
    seis.onclick = function(e){
        Resultado.textContent = Resultado.textContent + "6";
    }
    siete.onclick = function(e){
        Resultado.textContent = Resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        Resultado.textContent = Resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        Resultado.textContent = Resultado.textContent + "9";
    }
    cero.onclick = function(e){
        Resultado.textContent = Resultado.textContent + "0";
    }
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        operandoA = Resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoA = Resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoA = Resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        operandoA = Resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operandoB = Resultado.textContent;
        resolver();
    }
}

function limpiar(){
    Resultado.textContent = "";
}

function resetear(){
    Resultado.textContent = "";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB);
            break;
        case "+":
            res = parseFloat(operandoA) - parseFloat(operandoB);
            break;
        case "*":
            res = parseFloat(operandoA) * parseFloat(operandoB);
            break;
        case "/":
            res = parseFloat(operandoA) / parseFloat(operandoB);
            break;
    }
    resetear();
    Resultado.textContent = res;
}