alert("Boas vindas ao jogo do número secreto");

const numeroMaximo = 100;
const nivelFacil = 20;
const nivelMedio = 10;
const nivelDificil = 7;

let nrAleatorio = Math.random();
let numeroSecreto = gerarNumeroAleatorio();
let chute = 0; // Declara a variável 'chute' antes do loop
let tentativas = 0;

function gerarNumeroAleatorio() {
    let numero = Math.floor(nrAleatorio * numeroMaximo) + 1;
    return numero;

}

/*
    If = se
    Else = Senão
    While = Enquanto
*/
if (nivelMedio > tentativas) {
    while (chute != numeroSecreto) {
        tentativas++;
        chute = prompt(`Escolha um número de 1 a ${numeroMaximo}: `);

        if (chute == numeroSecreto) {
            alert(`Parabéns!!! Você digitou o número secreto!!! ${numeroSecreto} com ${tentativas} ${tentativas == 1 ? 'tentativa' : 'tentativas'}.`);
        } else {

            alert(`Você não acertou o número secreto. Tente novamente! \n\n Número de tentativa(s): ${tentativas} de ${nivelMedio}`);

            if (numeroSecreto > chute) {
                alert(`O número secreto é maior ${chute}.`)
            } else {
                alert(`O número secreto é menor ${chute}`)

            }
        }
    }
} else {
    alert('Game Over:\nVocê perdeu!!')
}
