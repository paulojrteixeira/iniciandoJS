let nota = 8;

switch (Math.ceil(nota)) {
    case 10:
    case 9:
    case 8:
        console.log('Parabéns!!');
        break
    case 7:
    case 6:
        console.log('Bom!');
        break
    case 5:
    case 4:
        console.log('Recuperação');
        break
    case 3:
    case 2:
    case 1:
    case 0:
        console.log('Reprovado');
        break
        default:
        console.log('Nota Invalida');
}