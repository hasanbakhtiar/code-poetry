// function name(params){
// }

// function info(a){
//   console.log(a);
// }

// info(10);
// info(20);
// info(30);
// info("a");

// function calculate(productName,alis,satis){
//     const xeyir = satis-alis;
//     if (xeyir < 0) {
//      return `Bu satisda ${xeyir}AZN ziyan etdin`
//     }else{
//       return `Mehsulun adi: ${productName}, bir satisdan qazandigim mebleg:${xeyir}AZN `;
//     }
// }

// console.log(calculate("Telefon",1400,450));
// console.log(calculate("Laptop",1000,1150));


// console.log(typeof function(){});



// infoOne()

// function infoOne(){
//   console.log('test one is successfull');
// }


// const infoTwo = function(){
//   console.log('test two is successfull');
// }
// infoTwo();



// (function(text){
//   console.log(text);
// })('test three is successfull');


// function infoOne(a,b){
//     return a+b
// }


// function infoTwo(c,d){
//   return c*d
// }


// function infoThree(){
//  return infoOne(5,10) + infoTwo(20,30);
// }
// document.write(infoThree())





// function info(a=10,b=20){
//     return a+b
// }

// console.log(info(100,100));

const phone = [
  {
    id:1,
    title:"Samsung S24",
    price:2300
  },
  {
    id:2,
    title:"Xiaomi 13",
    price:1900
  },
  {
    id:3,
    title:"Oneplus 11 ",
    price:2000
  },
  {
    id:4,
    title:"Oppo 10 ",
    price:700
  }
]

const laptop = [
  {
    id:1,
    title:"Asus Rog",
    price:4300
  },
  {
    id:2,
    title:"Acer Predator",
    price:3900
  },
  {
    id:3,
    title:"Dell G3",
    price:2000
  },
  {
    id:4,
    title:"MSI Sword",
    price:5700
  }
]



function productList (data){
  for(let item of data ){
    console.log(item.title);
  }
}
productList(phone)
productList(laptop)

