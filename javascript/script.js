let input = document.querySelector("input");
let AddBtn = document.querySelector(".buttons button#AddTodo");
let ClearBtn = document.querySelector(".buttons button#ClearTodo");
let list = document.querySelector(".list");


function ClearInputAndFocus(){
    input.value = '';
    input.focus();
}


function createElem() {
  let li = document.createElement("li");
  li.className = "list-group-item d-flex align-items-center justify-content-between bg-light";
  let span = document.createElement("span");
  span.innerHTML = input.value;
  let icon = document.createElement("i");
  icon.className = "fas fa-trash-can text-danger";
  li.appendChild(span);
  li.appendChild(icon);
  list.appendChild(li);

  icon.addEventListener("click", ()=>{
    icon.parentElement.remove();
  })

  ClearInputAndFocus();
}

function AddTodo() {
  createElem();
}

function AddElemWithEnter(e) {
  if (e.keyCode === 13) {
    createElem();
  }
}

AddBtn.addEventListener("click", AddTodo);
input.addEventListener("keyup", AddElemWithEnter);
ClearBtn.addEventListener("click", ClearInputAndFocus)