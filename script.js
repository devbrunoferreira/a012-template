//////////////////////// CONDICIONAIS I /////////////////////////

// const bool1 = false;
// const bool2 = true;
// const bool3 = true;

// if (bool1) {
//     alert('ENTREI NO IF!');
// } else {
//     alert('ENTREI NO ELSE!')
// }


const media = 9;

if (media >= 5) {
    console.log('Você foi aprovado, parabéns!');
} else if (media >= 3) {
    console.log('Recuperação!');
} else if (media < 3) {
    console.log('Reprovado! Você não atingiu a média!');
} else {
    console.log('Dado inválido!');
}