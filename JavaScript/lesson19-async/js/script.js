

// const myRequest = new Promise((resolve,reject)=>{
//     let info = false;
//     if (info) {
//         resolve("connect is successfully.")
//     }else{
//         reject("something is wrong!")
//     }

// }) 

// myRequest
// .then(res=>console.log(res))
// .catch(err=>console.log(err))



async function info (){

let newData = await fetch("https://mocki.io/v1/fb92bcb5-3930-4566-9303-cfa59a544a43")
let myData = await newData.json();

let li = "";
myData.map(i=>{
    li+=`<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>>`
})
document.querySelector('ul').innerHTML = li;


}

info()



