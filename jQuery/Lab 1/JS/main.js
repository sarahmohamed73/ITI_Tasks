let flag = false; // No Animate
let direction = 1; // 1 for moving right, 0 for moving left
const movingRight = function() {
  direction = 1;
  $("#div3>img").css("transform","rotateY(0deg)");
  $("#div3>img").animate({left: "400px"},3000,movingLeft);
}
const movingLeft = function() {
  direction = 0;
  $("#div3>img").css("transform","rotateY(180deg)");
  $("#div3>img").animate({left: "0px"},3000,movingRight);
}

const birdMoving = function() {
  if(direction) {
    movingRight();
  } else {
    movingLeft();
  }
}
$("input[value=Animate]").on("click", function(){
  if(!flag) {
    flag = true; 
    birdMoving();
  }
});
$("input[value=Stop]").on("click", function(){
  if(flag) {
    flag = false;
    $("#div3>img").stop();
  }
});