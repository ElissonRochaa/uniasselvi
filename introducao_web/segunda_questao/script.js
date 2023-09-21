// Elementos HTML
const novaTarefa = document.getElementById("nova-tarefa");
const adicionarBotao = document.getElementById("adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

// Adicionar tarefa ao clicar no botão "Adicionar Tarefa"
adicionarBotao.addEventListener("click", function () {
    const tarefaTexto = novaTarefa.value.trim();
    if (tarefaTexto !== "") {
        const tarefa = document.createElement("li");
        tarefa.className = "tarefa";
        tarefa.innerHTML = `
            <span>${tarefaTexto}</span>
            <input type="checkbox">
            <button class="remover">Remover</button>
        `;
        listaTarefas.appendChild(tarefa);
        novaTarefa.value = "";
    }
});

// Marcar tarefa como concluída
listaTarefas.addEventListener("click", function (e) {
    if (e.target.type === "checkbox") {
        const tarefa = e.target.parentElement;
        tarefa.classList.toggle("tarefa-concluida");
    }
});

// Remover tarefa
listaTarefas.addEventListener("click", function (e) {
    if (e.target.className === "remover") {
        const tarefa = e.target.parentElement;
        listaTarefas.removeChild(tarefa);
    }
});