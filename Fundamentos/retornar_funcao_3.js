function somar1(a, b) {
    return a + b;

}

console.log(somar1(5, 3));

function somar2(a) {
    return function (b) {
        return a + b;
    }
}

console.log(somar2(5) (3));

const somarMais7 = somar2(7);

console.log(somarMais7(5));
console.log(somarMais7(15));