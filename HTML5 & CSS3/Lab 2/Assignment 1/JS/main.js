let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
let color = document.querySelector("input[type = color]");
let clickBtn = document.querySelector("button");
clickBtn.onclick = function() {
  context.strokeStyle = color.value;
}
setInterval(function(){
  context.clearRect(0,0,canvas.width,canvas.height);
  for(let i = 0 ; i < 100 ; i++) {
    context.beginPath();
    let x = parseInt(Math.random() * canvas.width);
    let y = parseInt(Math.random() * canvas.height);
    context.arc(x,y,30,0,2*Math.PI,true);
    context.stroke();
  }
},1000);