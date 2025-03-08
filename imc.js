document.getElementById('imc-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const imc = (peso / (altura * altura)).toFixed(2);
  let resultado = '';

  switch (true) {
    case imc <= 17.9:
      resultado = "Você está em magreza extrema.";
      break;
    case imc >= 18 && imc <= 24.99:
      resultado = "Você está no peso ideal.";
      break;
    case imc >= 25 && imc <= 29.99:
      resultado = "Você está acima do peso ideal com sobrepeso.";
      break;
    case imc >= 30 && imc <= 34.99:
      resultado = "Você está em obesidade grau I.";
      break;
    case imc >= 35 && imc <= 39.99:
      resultado = "Você está em obesidade grau II.";
      break;
    case imc >= 40:
      resultado = "Você está em obesidade grau III.";
      break;
    default:
      resultado = "IMC fora do intervalo.";
      break;
  }

  document.getElementById('resultado').textContent = resultado;
});
