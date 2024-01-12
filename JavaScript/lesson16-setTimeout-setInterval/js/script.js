const h1 = document.querySelector('h1');

const myTime = setInterval(()=>{
    h1.innerHTML = new Date()
},1000);


document.querySelector('button').onclick =()=>{
    clearInterval(myTime);
}

