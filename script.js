// Função para gerar um número aleatório entre 1 e 100
let nrAleatorio = Math.random();
function gerarNumeroAleatorio() {
    let numero = 0;
    numero = Math.floor(nrAleatorio * 100) +1;

    return numero;
}
nrAleatorio = gerarNumeroAleatorio();

/*alert("Numero Aleatório: " + nrAleatorio); */
alert("Numero Aleatorio: " + nrAleatorio);
alert("Numero Aleatorio: " + nrAleatorio +
    "n/nNumero Gerado: " + gerarNumeroAleatorio());