let addBtn = document.querySelector("input[value = Add]");
let nameBtn = document.querySelector("input[name = studentName]");
let gradeBtn =  document.querySelector("input[name = studentGrade]");
let nameError = document.querySelector("span#nameError");
let gradeError = document.querySelector("span#gradeError");
let tableObject = document.querySelector("#studentsData");
let sortObject = document.querySelector("select.sort");
let filterObject = document.querySelector("select.filter");
let names = [];
nameBtn.onkeypress = function(event) {
  if(!isNaN(event.key)) event.preventDefault();
}
gradeBtn.onkeypress = function(event) {
  if(isNaN(event.key)) event.preventDefault();
}

addBtn.onclick = function() {
  let nameValue = nameBtn.value;
  let gradeValue = Number(gradeBtn.value);
  if(nameValue === "") {
    nameError.innerText = "Required";
    nameError.style.display = "block";
  } else {
    nameError.style.display = "none";
    nameValue = nameBtn.value[0].toUpperCase()+nameBtn.value.slice(1).toLowerCase();
    if(names.indexOf(nameValue) !== -1) {
      nameError.innerText = "This Student is added!";
      nameError.style.display = "block";
    } else if(gradeValue < 0 || gradeValue > 100) {
      gradeError.style.display = "block";
    } else {
      let departmentRadio = document.querySelector("input[type = radio]:checked");
      names.push(nameValue);
      gradeError.style.display = "none";
      let trObject = document.createElement("tr");
      trObject.classList.add(departmentRadio.value);

      let tdObject = document.createElement("td");
      tdObject.innerText = nameValue;
      trObject.append(tdObject);
    
      tdObject = document.createElement("td");
      tdObject.innerText = gradeValue;
      trObject.append(tdObject);

      let deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.onclick = function() {
        this.parentElement.parentElement.remove();
        let name = this.parentElement.previousSibling.previousSibling.innerText;
        names.splice(names.indexOf(name),1);
      }
      tdObject = document.createElement("td");
      tdObject.append(deleteBtn);
      trObject.append(tdObject);
    
      tableObject.append(trObject);
      sortName();
    }
  }
}

const sortName = function() {
  let rows = tableObject.rows;
  for(let i = 0 ; i < rows.length ; i++) {
    for(let j = i + 1 ; j < rows.length ; j++) {
      let a = rows[i].querySelectorAll("td")[0];
      let b = rows[j].querySelectorAll("td")[0];
      if (a.innerText.toLowerCase() > b.innerText.toLowerCase()) {
        rows[j].parentNode.insertBefore(rows[j], rows[i]);
      }
    }
  }
}

const sortGrade = function() {
  let rows = tableObject.rows;
  for(let i = 0 ; i < rows.length ; i++) {
    for(let j = i + 1 ; j < rows.length ; j++) {
      let a = rows[i].querySelectorAll("td")[1];
      let b = rows[j].querySelectorAll("td")[1];
      if (Number(a.innerText) > Number(b.innerText)) {
        rows[j].parentNode.insertBefore(rows[j], rows[i]);
      }
    }
  }
}


sortObject.addEventListener("change", function() {
  let sortWay = sortObject.value;
  if(sortWay === "name") sortName();
  if(sortWay === "grade") sortGrade();
});

filterObject.addEventListener("change", function() {
  let rows = tableObject.rows;
  let filterWay = filterObject.value;
  for(let i =  0 ; i < rows.length ; i++) {
    let grade = Number(rows[i].querySelectorAll("td")[1].innerText);
    if(filterWay === "success" && grade < 60) {
      console.log(rows[i]);
      rows[i].style.display = "none";
    } else if(filterWay === "fail" && grade >= 60) {
      console.log(rows[i]);
      rows[i].style.display = "none";
    } else {
      rows[i].style.display = "";
    }
  }
});