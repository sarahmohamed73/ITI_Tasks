let tbodyObject = document.querySelector(".toDoLists tbody");
let task = document.querySelector("input#task");
let addBtn = document.querySelector("button.add");
task.onkeypress = function(event) {
  if(!isNaN(event.key)) event.preventDefault();
}
addBtn.onclick = function() {
  let trObject = document.createElement("tr");

  let checkBtn = document.createElement("input");
  checkBtn.setAttribute("type","checkbox");
  checkBtn.onclick = function() {
    this.parentElement.nextSibling.style.textDecoration = "line-through";
  }
  let tdObject = document.createElement("td");
  tdObject.append(checkBtn);
  trObject.append(tdObject);

  tdObject = document.createElement("td");
  tdObject.innerText = task.value;
  trObject.append(tdObject);
  
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = function() {
    this.parentElement.parentElement.remove();
  }
  tdObject = document.createElement("td");
  tdObject.append(deleteBtn);
  trObject.append(tdObject);

  tbodyObject.append(trObject);
  task.value = "";
}