var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Voce acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Digite um numero de 0 a 10";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "Errou, o número secreto é menor.";
  } else {
    elementoResultado.innerHTML = "Errou, o número secreto é maior.";
  }
}
