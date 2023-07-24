let egg = document.querySelector(".egg");
let basket = document.querySelector(".basket");
egg.style.left = Math.floor(Math.random() * (window.innerWidth - egg.width))+"px";

const fallEgg = function() {
  let topEgg = egg.offsetTop;
  let leftEgg = egg.offsetLeft;
  let topBasket = basket.offsetTop;
  let leftBasket = basket.offsetLeft;
  topEgg += 10;
  if(topEgg < window.innerHeight - egg.height) {
    egg.style.top = topEgg +"px";
  } else {
    clearInterval(intervalId);
    egg.src = `Images/Uovo_sorridente.png`;
    setTimeout(() => {
      egg.src = `Images/1182.png`;
      egg.style.top = "50px";
      egg.style.left = Math.floor(Math.random() * (window.innerWidth - egg.width))+"px";
      intervalId = setInterval(fallEgg, 50)
    },1000);
  }

  if(topEgg + egg.height >= topBasket && leftEgg + egg.width >= leftBasket && leftEgg <= leftBasket + basket.width) {
    console.log("dddd");
    clearInterval(intervalId);
    egg.style.display = "none";
    setTimeout(() => {
      egg.style.display = "block";
      egg.style.top = "50px";
      egg.style.left = Math.floor(Math.random() * (window.innerWidth - egg.width))+"px";
      intervalId = setInterval(fallEgg, 50)
    },1000);
  }
}
let intervalId = setInterval(fallEgg, 50)

document.onkeydown = function(event) {
  if(event.code === "ArrowRight" && basket.offsetLeft + 20 < window.innerWidth - basket.width) {
    basket.style.left = basket.offsetLeft + 20 + "px";
  }
  
  if(event.code === "ArrowLeft" && basket.offsetLeft - 20 > 0) {
    basket.style.left = basket.offsetLeft - 20 + "px";
  }
}