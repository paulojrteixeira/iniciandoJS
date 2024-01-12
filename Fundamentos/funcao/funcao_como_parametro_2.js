function executar(fn, n1 = 10, n2 = 2) {
    if(typeof fn === "function") {
        console.log(fn(n1,n2)); 
    }
}

function somar(a, b) {
    return a + b;
}

function multiplicar(a, b) {
    return a * b
}

function bomDia() {
    return "Bom Dia"
}

executar(somar);
executar(multiplicar);
executar(multiplicar, 9, 5);
executar(bomDia);