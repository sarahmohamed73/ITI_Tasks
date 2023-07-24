const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","1182.png","basket.png","bird.gif","Uovo_sorridente.png"];
const getImageIndex = function() {
  let imageSrc = document.images[0].src;
  let imageName = imageSrc.slice(imageSrc.lastIndexOf("/")+1);
  let imageIndex = images.indexOf(imageName);
  return imageIndex;
}
// Next
let nextButton = document.querySelector("button.next");
nextButton.onclick = function(){
  let imageIndex = getImageIndex();
  imageIndex++;
  if (imageIndex > 11) imageIndex = 0;
  document.images[0].src = `images/${images[imageIndex]}`;
  console.log(imageIndex);
}
// Pervious
let perviousButton = document.querySelector("button.pervious");
perviousButton.onclick = function(){
  let imageIndex = getImageIndex();
  imageIndex--;
  if (imageIndex < 0) imageIndex = 11;
  document.images[0].src = `images/${images[imageIndex]}`;
  console.log(imageIndex);
}
// Slide Show
// const getTimerId = (timerId) => timerId;
let slideShowButton = document.querySelector("button.slideShow");
let stopButton = document.querySelector("button.stop");
slideShowButton.onclick = function(){
  let imageIndex = getImageIndex();
  let timerId = setInterval(() => {
    imageIndex++;
    if (imageIndex > 11) imageIndex = 0;
    document.images[0].src = `images/${images[imageIndex]}`;
    console.log(imageIndex);
  },1000);
  // Stop
  stopButton.onclick = function(){
    clearInterval(timerId);
    console.log(imageIndex);
  }
}