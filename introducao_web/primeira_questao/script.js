// Obtém elementos HTML por seus IDs
const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");

// Adiciona um ouvinte de evento de clique ao botão
botao.addEventListener("click", function () {
    // Verifica o texto atual do título
    if (titulo.textContent === "Texto Inicial") {
        // Se for "Texto Inicial", muda para "Novo Texto"
        titulo.textContent = "Novo Texto";
    } else {
        // Caso contrário, muda de volta para "Texto Inicial"
        titulo.textContent = "Texto Inicial";
    }
});