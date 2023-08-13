// Engine Class
class Engine {
  #image;
  static #counter = 0;
  constructor(imgSrc) {
    Engine.#counter++; 
    this.imageSrc = imgSrc;
    this.body = document.querySelector("body");
    this.imgObject = document.createElement("img");
    this.imgObject.src = this.imageSrc;
    this.imgObject.style.width = "300px";
    this.imgObject.style.height = "300px";
    this.body.append(this.imgObject);
    this.#image = document.querySelector("img");
    if(new.target.name === "Engine") {
      throw new Error("This class cannot be instantiated directly.");
    }
  }
  getImage() {
    return this.#image;
  }
  getCounter() {
    return Engine.#counter;
  }
}

// Car Class
class Car extends Engine {
  static #counterCar = 0;
  constructor(positionX,positionY,imageSrc) {
    super(imageSrc);
    Car.#counterCar++;
    this.positionX = positionX;
    this.positionY = positionY;
    this.image = this.getImage();
    this.image.style.position = "absolute";
    this.image.style.left = positionX + "px";
    this.image.style.top = positionY + "px";
  }

  // Move Left Function
  moveLeft(value) {
    this.image.style.transform = "rotateY(180deg)";
    this.value = value;
    if(this.image.offsetLeft <= 0) {
      this.image.style.transform = "rotateY(0deg)";
    } else {
      this.image.style.left = (this.image.offsetLeft - this.value) + "px";
    }
  }

  // Move Right Function
  moveRight(value) {
    this.image.style.transform = "rotateY(0deg)";
    this.value = value;
    if(this.image.offsetLeft + this.image.width >= window.innerWidth) {
      this.image.style.transform = "rotateY(180deg)";
    } else {
      this.image.style.left = (this.image.offsetLeft + this.value) + "px";
    }
  }
  
  // Change Style
  changeStyle(styles) {
    this.styles = styles;
    for(let property in styles) {
      console.log(property, styles[property]);
      this.image.style[property] = styles[property];
    }
  }

  // Move Car
  moveCar(direction) {
    // this moveInterval = setInterval(()=>{
    //   if(direction === "left") this.moveLeft(10);
    //   else if (direction === "right") this.moveRight(10);
    //   if(this.image.offsetLeft + this.image.offsetWidth >= window.innerWidth || this.image.offsetLeft <= 0) {
    //     clearInterval(this.moveInterval);
    //   }
    // },50);
    if(direction === "left") {
      this.moveInterval = setInterval(()=>{
        this.moveLeft(10);
        console.log("I Work Left");
        if(this.image.offsetLeft <= 0) {
          clearInterval(this.moveInterval);
        }
      },50);
    } else if (direction === "right") {
      this.moveInterval = setInterval(()=>{
        this.moveRight(10);
        console.log("I Work Right");
        if(this.image.offsetLeft + this.image.width >= window.innerWidth) {
          clearInterval(this.moveInterval);
        }
      },50);
    }
  }

  // Get Counter Car
  getCounterCar() {
    return Car.#counterCar;
  }

  // Override ToString
  toString() {
    this.carPositionX = this.image.offsetLeft;
    this.carPositionY = this.image.offsetTop;
    return `Car Position : (${this.carPositionX} , ${this.carPositionY}), Image Sourse : ${this.imageSrc}`;
  }
}

class Bus extends Engine {

}

let carObject = new Car(10,10,"Images/200.jpg");
let carObject2 = new Car(400,10,"Images/205.jpg");
// let busObject = new Bus();
let counterCar = carObject.getCounter();
// let counterBus = busObject.getCounter();
console.log(counterCar);
console.log(carObject.getCounterCar());
// console.log(counterBus);