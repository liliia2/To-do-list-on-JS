let arrAllTasks = [];
let arrCompletedTasks = [];
let countOfAllTasks = document.getElementById('countOfAllTasks');
let countOfCompletedTasks = document.getElementById('countOfCompletedTasks');

//Функция проверки, входит ли этот таск в список выполненных
function listWithTasks(element) {
    if (arrCompletedTasks.includes(element)) {
        return taskList = "<div class='task'>" + "<li class='completedTasks'>" + element + "</li>" + '<img id="del_icon" src="ic_delete.svg" onclick="delElement()">' + "</div>";
    } else {     
        return taskList = "<div class='task'>" + "<li>" + element + "</li>" + '<img id="del_icon" src="ic_delete.svg" onclick="delElement()">' + "</div>";}
}

//Функция добавления тасков
function getNewTask() {
    if (arrAllTasks.includes(document.getElementById('addNewTask').value)) {
        alert('This task already added!');
        document.getElementById('addNewTask').value = '';
    } else if (document.getElementById('addNewTask').value.length > 0) {
        arrAllTasks.push(document.getElementById('addNewTask').value);
        document.getElementById("tasks").innerHTML = "";
        for (let i = 0; i < arrAllTasks.length; i++) {
            let element = arrAllTasks[i];
            let taskList = listWithTasks(element);
            document.getElementById("tasks").innerHTML += taskList;
        }
        document.getElementById('addNewTask').value = '';
        countOfAllTasks.textContent = arrAllTasks.length;
    }
}

//Функция улавливания нажатия на Enter
function keyClick() {
    if (event.keyCode === 13) getNewTask();
} 

//Функция добавления и удаления таска в/из списка выполненных
const pressedElement = document.getElementById('tasks');

pressedElement.addEventListener('click', function (event) {
    if (event.target.classList != "completedTasks" && event.target.innerText.length > 0) {
        let numOfThisTask = arrAllTasks.indexOf(event.target.innerText);
        arrCompletedTasks.push(arrAllTasks[numOfThisTask]);
        countOfCompletedTasks.textContent = arrCompletedTasks.length;
        event.target.classList.add('completedTasks');
    } else if (event.target.classList == "completedTasks") {
        arrCompletedTasks.splice((event.target),1);
        countOfCompletedTasks.textContent = arrCompletedTasks.length;
        event.target.classList.remove('completedTasks'); 
    }
});

//Функция удаления тасков из списков
function delElement() {
    let thisTask = event.target.parentElement.innerText;
    let numOfThisTask = arrAllTasks.indexOf(thisTask);
    arrAllTasks.splice(numOfThisTask, 1);
    if (arrCompletedTasks.includes(thisTask)) {
        let numOfCompletedTask = arrCompletedTasks.indexOf(thisTask);
        arrCompletedTasks.splice(numOfCompletedTask, 1);
    }
    document.getElementById("tasks").innerHTML = "";
    for (let i = 0; i < arrAllTasks.length; i++) {
        let element = arrAllTasks[i];
        let taskList = listWithTasks(element);
        document.getElementById("tasks").innerHTML += taskList;
    }
    countOfAllTasks.textContent = arrAllTasks.length;
    countOfCompletedTasks.textContent = arrCompletedTasks.length;
}