let a = 1; 
let b = 2;

console.log(++a === b++)    /// ++a tem prioridade com relação à ++b
/// a = 2 === 2 --> true
/// a = 2 --- b = 3

a++;
console.log(a === b)
b++;
