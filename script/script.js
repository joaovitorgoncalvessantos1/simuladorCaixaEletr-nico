const saldo = document.getElementById("saldo");
const inputDeposito = document.getElementById("inputDeposito");
const btnDepositar = document.getElementById("btnDepositar");
const inputSaque = document.getElementById("inputSaque");
const btnSacar = document.getElementById("btnSacar");
const btnLimpar = document.getElementById("sair");


let valorSaldo = 0;


saldo.innerText = `R$ ${valorSaldo.toFixed(2).replace('.', ',')}`;

btnDepositar.addEventListener("click", function () {
  const valorDigitado = parseFloat(inputDeposito.value);

  if (!isNaN(valorDigitado) && valorDigitado > 0) {
    valorSaldo += valorDigitado;
    saldo.innerText = `R$ ${valorSaldo.toFixed(2).replace('.', ',')}`;
  }
  inputDeposito.value = "";
});


btnSacar.addEventListener("click", function () {
  const valorSaque = parseFloat(inputSaque.value);

  if (isNaN(valorSaque) || valorSaque <= 0) {
    alert("Digite um valor válido para saque!");
    return;
  }

  if (valorSaque > valorSaldo) {
    alert("Saldo insuficiente!");
    return;
  }

  valorSaldo -= valorSaque;
  saldo.innerText = `R$ ${valorSaldo.toFixed(2).replace('.', ',')}`;
  inputSaque.value = "";
});

btnLimpar.addEventListener("click", function () {
  valorSaldo = 0; 
  saldo.innerText = `R$ ${valorSaldo.toFixed(2).replace('.', ',')}`; // Atualiza a tela

  inputDeposito.value = ""; 
  inputSaque.value = ""; 

  alert("Sessão encerrada!");
});
