
document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Obtém os valores do formulário
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    // Cria uma nova linha na tabela
    var tabela = document.getElementById("corpoTabela");
    var novaLinha = tabela.insertRow();
    var celulaEmail = novaLinha.insertCell(0);
    var celulaTelefone = novaLinha.insertCell(1);
    celulaEmail.textContent = email;
    celulaTelefone.textContent = telefone;

    // Limpa os campos do formulário
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
});
