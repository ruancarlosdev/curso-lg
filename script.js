// Função para gerar um número aleatório entre 1 e 100
     /*alert("Boas vindas ao jogo do número secreto")


let nrAleatorio = Math.random();
function gerarNumeroAleatorio() {
    let numero = 0;
    numero = Math.floor(nrAleatorio * 100) +1;

    return numero;
}

/*
    If = se
    Else = Senão
    While = Enquanto
*/
    /*while (chute != numeroSecreto){
    let chute = prompt(`Escolha um número de 1 a 100:" + ${numeroSecreto}`);
    
    if (chute == numeroSecreto){
    alert("Você digitou o número secreto!!!");
    }else{
    alert("Você acertou o número secreto");
    }
}
  */

//nrAleatorio = gerarNumeroAleatorio();

/*alert("Numero Aleatório: " + nrAleatorio); */
/*alert("Numero Aleatorio: " + nrAleatorio);
alert("Numero Aleatorio: " + nrAleatorio +
    "n/nNumero Gerado: " + gerarNumeroAleatorio());*/

alert("Boas vindas ao jogo do número secreto");

let nrAleatorio = Math.random();
let numeroSecreto = gerarNumeroAleatorio();
let chute; // Declara a variável 'chute' antes do loop
let tentativas = 0;
    
function gerarNumeroAleatorio() {
    let numero = Math.floor(nrAleatorio * 100) + 1;
    return numero;
    
}
    
    /*
        If = se
        Else = Senão
        While = Enquanto
    */
while (chute != numeroSecreto){
    tentativas++;
    chute = prompt('Escolha um número de 1 a 100: ');
    
    if (chute == numeroSecreto) {
            alert(`Parabéns!!! Você digitou o número secreto!!! ${numeroSecreto} com ${tentativas} ${tentativas == 1 ? 'tentativa' : 'tentativas'}.`);
    } else {

        alert("Você não acertou o número secreto. Tente novamente!");
        
        if (numeroSecreto > chute){
            alert(`O número secreto é maior ${chute}.`)   
        }else{
            alert(`O número secreto é menor ${chute}`)
        
        }
    }
}
    