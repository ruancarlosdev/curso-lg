alert("Boas vindas ao jogo do número secreto");

const numeroMaximo = 100;
const nivelFacil = 20;
const nivelMedio = 10;
const nivelDificil = 7;

let nrAleatorio = Math.random();
let numeroSecreto = gerarNumeroAleatorio();
let chute = 0; // Declara a variável 'chute' antes do loop
let tentativas = 0;
let nivel;
let nivel_escolhido;

function gerarNumeroAleatorio() {
    let numero = Math.floor(nrAleatorio * numeroMaximo) + 1;
    return numero;

}

nivel = prompt(`Escolha um nível do Jogo:
                1 - Nível Fácil: ${nivelFacil} tentativas
                2 - Nível Médio: ${nivelMedio} tentativas
                3 - Nível Difícil ${nivelDificil} tentativas`);

    switch (nivel){
        case "1": nivel_escolhido == nivelFacil;
        case "2": nivel_escolhido == nivelMedio;
        case "3": nivel_escolhido == nivelDificil;

    };
alert (`O nível escolhido foi ${nivel_escolhido}`);

while (chute != numeroSecreto) {
    tentativas++;
    if (tentativas <= nivel_escolhido) { // Corrigi a comparação para ser com `tentativas` ao invés de `nivelMedio`

        chute = prompt(`Escolha um número de 1 a ${numeroMaximo}: `);

        if (chute == numeroSecreto) {
            alert(`Parabéns!!! Você digitou o número secreto!!! ${numeroSecreto} com ${tentativas} ${tentativas == 1 ? 'tentativa' : 'tentativas'}.`);
            break; // Para sair do loop ao acertar o número secreto
        } else {
            alert(`Você não acertou o número secreto. Tente novamente! \n\n Número de tentativa(s): ${tentativas} de ${nivel_escolhido}`);
        
        if(tentativas < nivel_escolhido){
            if (numeroSecreto > chute) {
                alert(`O número secreto é maior que ${chute}.`);
            } else {
                alert(`O número secreto é menor que ${chute}.`);
                }
            }
        }
    } else {
    alert('Game Over:\nVocê perdeu!!!\n\nTente novamente.');
    break; // Para sair do loop quando atingir o limite de tentativas
    }
}

