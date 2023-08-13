let audioTag = document.querySelector("audio");
let volume = document.querySelector("#volume");
let time = document.querySelector("#time");
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let stoping = document.querySelector(".stop");
let audios = document.querySelector("ul");
let image = document.querySelector("img");
window.onload = function() {
  time.max = audioTag.duration; //Set Max of Time Range
}
play.onclick = function() {
  // audioTag.volume = volume.value;
  audioTag.play();
}
pause.onclick = function() {
  audioTag.pause();
}
stoping.onclick = function() {
  audioTag.load();
  audioTag.pause();
}
volume.oninput = function() {
  audioTag.volume = volume.value;
}
time.oninput = function() {
  audioTag.currentTime = time.value;
}
audioTag.ontimeupdate = function() {
  console.log("play");
  time.value = audioTag.currentTime;
}
audios.addEventListener("click",function(e){
  let audioName = e.target.innerText;
  audioTag.src = `Audios/${audioName}.mp3`;
  image.src = `Images/${audioName}.jpg`;
});