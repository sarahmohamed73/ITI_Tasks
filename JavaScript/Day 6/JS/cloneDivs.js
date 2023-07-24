let container = document.querySelector(".container");
container.addEventListener("click", function(e){
  if(e.target.className.includes("clone")) {
    let originalDiv = e.target;
    let clonedDiv = originalDiv.cloneNode();
    originalDiv.classList.remove("clone");
    container.append(clonedDiv);
  }
})