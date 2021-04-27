function createTask (){
    let selection = document.getElementById("dias-semana").value
    let task = document.getElementById("tarefa").value
    document.getElementById(selection).innerHTML += "<p>- " + task + "</p>"
    document.getElementById("tarefa").value = ""
    document.getElementById("dias-semana").value = "domingo"

}