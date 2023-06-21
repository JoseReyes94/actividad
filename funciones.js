var operandoa;
var operandob;
var operacion;

function init() {
    // variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var Seno = document.getElementById('Seno');
    var Coseno = document.getElementById('Coseno');
    var Tangente = document.getElementById('Tangente');
    var Logaritmo = document.getElementById('Logaritmo');
    var Potencia = document.getElementById('Potencia');
    var Raiz = document.getElementById('Raiz');
    var Factorial = document.getElementById('Factorial');
    var Decimal = document.getElementById('Decimal');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    uno.onclick = function(e) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e) {
        resultado.textContent = resultado.textContent + "0";
    }
    reset.onclick = function(e) {
        resetear();
    }
    Seno.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "sen";
        limpiar();
    }
    Coseno.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "cos";
        limpiar();
    }
    Tangente.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "tan";
        limpiar();
    }
    Logaritmo.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "log";
        limpiar();
    }
    Potencia.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "^";
        limpiar();
    }
    Raiz.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "√";
        limpiar();
    }
    Factorial.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "!";
        resolver();
    }
    Decimal.onclick = function(e) {
        resultado.textContent = resultado.textContent + ".";
    }
    suma.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e) {
        operandob = resultado.textContent;
        resolver();
    }
}

function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
        case "sen":
            res = Math.sin(parseFloat(operandoa) * Math.PI / 180);
            break;
        case "cos":
            res = Math.cos(parseFloat(operandoa) * Math.PI / 180);
            break;
        case "tan":
            res = Math.tan(parseFloat(operandoa) * Math.PI / 180);
            break;
        case "log":
            var base = parseFloat(operandob);
            if (base > 0 && base !== 1) {
                res = Math.log(parseFloat(operandoa)) / Math.log(base);
            } else {
                res = "Error: Base inválida";
            }
            break;
        case "^":
            res = Math.pow(parseFloat(operandoa), parseFloat(operandob));
            break;
        case "√":
            var indice = parseFloat(operandob);
            if (indice !== 0) {
                res = Math.pow(parseFloat(operandoa), 1 / indice);
            } else {
                res = "Error: Índice inválido";
            }
            break;
        case "!":
            res = factorial(parseFloat(operandoa));
            break;
        default:
            break;
    }
    resetear();
    resultado.textContent = res;
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    for (var i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}

// Call the init() function to initialize the calculator
init();
