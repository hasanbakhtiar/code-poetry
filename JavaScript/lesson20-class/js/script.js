
// function Car(title, color, year, price, stock) {
//   this.infoTitle = title;
//   this.infoColor = color;
//   this.infoYear = year;
//   this.infoPrice = price;
//   this.infoStock = stock;
 
//   this.calculateSpeed=function(km,hour){
//       return `${this.infoTitle}: ${km/hour} km/h`
//   }
// }


// console.log(Car.prototype);


// Car.prototype.doorCount = function(){
//   return 4
// };




 class Car {
  
  constructor(title,color,year,price,stock){
      this.infoTitle = title;
      this.infoColor = color;
      this.infoYear = year;
      this.infoPrice = price;
      this.infoStock = stock;
  }

  calculateSpeed(km,hour){
      return `${this.infoTitle}: ${km/hour} km/h`
  }

  startEngine(buttonStart){
    if (buttonStart) {
      return `${this.infoTitle} is start`
    }else{
      return "please press start button"
    }
  }

}


Car.prototype.doorCount = function(){
  return 4
};




const myCar = new Car("BMW X5", "black", 2023, 30000, true);
console.log(myCar.infoTitle);
console.log(myCar.calculateSpeed(300,4));
console.log(myCar.doorCount());
// console.log(myCar.startEngine(false));


class Moto extends Car{

  constructor(title,color,year,price,stock){
    super(title,color,year,price,stock);
  }
  

}
const myMoto = new Moto("Yamaha S900");
console.log(myMoto.calculateSpeed(100,0.5));





