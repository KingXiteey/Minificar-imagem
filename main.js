function validateForm() {
    var numberA = parseInt(document.getElementById("numberA").value);
    var numberB = parseInt(document.getElementById("numberB").value);
    var messageElement = document.getElementById("message");

    if (numberB > numberA) {
        messageElement.textContent = "Formulário válido! O número B é maior que o número A.";
        messageElement.className = "success-message";
    } else {
        messageElement.textContent = "Erro: O número B deve ser maior que o número A.";
        messageElement.className = "error-message";
    }
};