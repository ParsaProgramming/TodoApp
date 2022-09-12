let input = document.querySelector("input");
let AddBtn = document.querySelector(".buttons button#AddTodo");
let ClearBtn = document.querySelector(".buttons button#ClearTodo");
let list = document.querySelector(".list");


function createElem(){
    let task = input.value;
    let li = document.createElement("li");
    li.className = "list-group-item d-flex align-items-center justify-content-between bg-light";
    let span = document.createElement("span");
    span.innerHTML = task;
    let icon = document.createElement("i");
    icon.className = "fas fa-trash-can text-danger";
    li.appendChild(span);
    li.appendChild(icon);
    list.appendChild(li);
}

function AddTodo(){
    createElem();
}

AddBtn.addEventListener("click", AddTodo);
