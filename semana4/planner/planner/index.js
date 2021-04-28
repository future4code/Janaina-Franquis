/* 1 - Crie uma função que é chamada ao clicar no botão "Criar Tarefa". 
       Use um evento apropriado que identifique o clique no botão.*/

function createTask() {
  let selection = document.getElementById("dias-semana").value; /* 3 - Capture o valor do seletor do HTML (o dia da semana selecionado) e armazene em uma variáve*/
  let task = document.getElementById("tarefa").value;/*2- Dentro da função, capture o valor do campo do HTML (que é a tarefa a ser colocada no planner) e armazene em uma variável.*/
  document.getElementById(selection).innerHTML += "<p>- " + task + "</p>";
  document.getElementById("tarefa").value = "";
  document.getElementById("dias-semana").value = "domingo";
}
