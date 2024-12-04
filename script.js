
alert("Boas vindas ao jogo do número secreto");

const numeroMaximo = 100;
const nivelFacil = 20;
const nivelMedio = 10;
const nivelDificil = 5;

let nrAleatorio = Math.random();
let numeroSecreto = gerarNumeroAleatorio();
let chute = 0; // Declara a variável 'chute' antes do loop
let tentativas = 0;
let nivel = 0;
let nivel_escolhido = 0;
let nivelValido = [1, 2, 3];

function gerarNumeroAleatorio() {
    let numero = Math.floor(nrAleatorio * numeroMaximo) + 1;
    return numero;
}
while (!nivelValido.includes(nivel)) {
    nivel = parseInt(prompt(`Escolha o nível do Jogo:
                1 - Nível Fácil: ${nivelFacil} tentativas
                2 - Nível Médio: ${nivelMedio} tentativas
                3 - Nível Difícil ${nivelDificil} tentativas`));

    // Corrigindo a comparação no switch
    switch (parseInt(nivel)) { // Converte o input para número com parseInt
        case 1:
            nivel_escolhido = nivelFacil;
            break;
        case 2:
            nivel_escolhido = nivelMedio;
            break;
        case 3:
            nivel_escolhido = nivelDificil;
            break;
        default:
            alert(`O número informado é incorreto!\nInforme um nível de 1 a 3.`);
            nivel_escolhido = 0; // Garante que o jogo não continue com valor inválido
    }
}

if (nivel_escolhido > 0) {
    alert(`O número de tentativas será ${nivel_escolhido}`);

    while (chute != numeroSecreto) {
        tentativas++;
        if (tentativas <= nivel_escolhido) {

            chute = parseInt(prompt(`Escolha um número de 1 a ${numeroMaximo}: `)); // Converte o input para número

            if (chute === numeroSecreto) {
                alert(`Parabéns!!! Você digitou o número secreto!!! ${numeroSecreto} com ${tentativas} ${tentativas === 1 ? 'tentativa' : 'tentativas'}.`);
                break; // Para sair do loop ao acertar o número secreto
            } else {
                alert(`Você não acertou o número secreto. Tente novamente! \n\n Número de tentativa(s): ${tentativas} de ${nivel_escolhido}`);

                if (tentativas < nivel_escolhido) {
                    if (numeroSecreto > chute) {
                        alert(`O número secreto é maior que ${chute}.`);
                    } else {
                        alert(`O número secreto é menor que ${chute}.`);
                    }
                }
            }
        } else {
            alert(`Game Over:\nVocê perdeu!!!\n\nTente novamente
                \n\nO número secreto era: ${numeroSecreto}.`);
            break; // Para sair do loop quando atingir o limite de tentativas
        }
    }
}

