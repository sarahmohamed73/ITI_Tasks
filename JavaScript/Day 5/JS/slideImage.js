const startSliding = function(ImgObject) {
  let counter = 1;
  let timerId = setInterval(() => {
    counter++;
    if(counter > 8) counter = 1;
    ImgObject.src = `Images/${counter}.jpg`;
  },1000);
  return timerId;
}

const stopSliding = function(timerId) {
  clearInterval(timerId);
}