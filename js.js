document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário
    
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);
    
    if (campoB > campoA) {
      document.getElementById('mensagem').innerHTML = '<p>Formulário válido! Número B é maior que o número A.</p>';
      document.getElementById('mensagem').style.color = 'green';
    } else {
      document.getElementById('mensagem').innerHTML = '<p>Formulário inválido! Número B deve ser maior que o número A.</p>';
      document.getElementById('mensagem').style.color = 'red';
    }
  });