document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    // Evita que o formulário seja enviado
    event.preventDefault();

    // Obtém os valores dos campos de entrada
    var numeroA = parseInt(document.getElementById('numeroA').value);
    var numeroB = parseInt(document.getElementById('numeroB').value);

    // Valida se o número B é maior que o número A
    if (numeroB > numeroA) {
        // Se for válido, envia o formulário
        this.submit();
    } else {
        // Se não for válido, exibe uma mensagem de erro
        document.getElementById('mensagemErro').innerText = "Número B deve ser maior que o número A.";
    }
});