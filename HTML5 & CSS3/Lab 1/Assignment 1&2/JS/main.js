// Local Storage
let usernameBtn = document.querySelector("input[type = text]");
let emailBtn = document.querySelector("input[type = email]");
let form = document.querySelector("form");
let rememberMe = document.querySelector("input[type = checkbox]");
form.onsubmit = function() {
  if(rememberMe.checked) {
    localStorage.setItem("username",usernameBtn.value);
    localStorage.setItem("email",emailBtn.value);
    
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
  }
}
window.onload = function() {
  if(localStorage.getItem("username")) {
    usernameBtn.value = localStorage.getItem("username");
    emailBtn.value = localStorage.getItem("email");
  }
}
