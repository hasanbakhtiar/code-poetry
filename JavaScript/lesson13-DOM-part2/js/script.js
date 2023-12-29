
const langData = {
    az:["Ana Sehife","Haqqimizda","Xidmetlerimiz","Meqale","Elaqe"],
    en:["Home","About","Service","Blog","Contact"]
}




const modeBtn = document.querySelector('#mode-btn');
const menuBtn = document.querySelector('#menu-btn');
const langBtn = document.querySelector('#lang-btn');
const nav = document.querySelector('nav');
const menu = document.querySelector('menu');
const menuLink = document.querySelectorAll('.menu-link');


langBtn.onclick =()=>{

    if (langBtn.innerHTML == 'AZ') {
        for(let i in langData.az){
            menuLink[i].innerHTML = langData.az[i];
        }
        langBtn.innerHTML = "EN"
    }else{
        for(let i in langData.en){
            menuLink[i].innerHTML = langData.en[i];
        }
        langBtn.innerHTML = "AZ"
    }

}




modeBtn.onclick = ()=>{
   if (modeBtn.innerHTML =='Dark') {
    nav.className = 'navbar navbar-expand-lg bg-dark navbar-dark';
    modeBtn.innerHTML = "Light";
    menuBtn.className = "btn btn-light mx-3";
}else{
    menuBtn.className = "btn btn-dark mx-3";
    nav.className = 'navbar navbar-expand-lg bg-light    navbar-light';
    modeBtn.innerHTML = "Dark";
   }
}

menuBtn.onclick = ()=>{
    menu.classList.toggle('hide')
}





// const text = document.querySelector('h1');
// const btn = document.querySelector('button');









// const changeTopia = ()=>{
//     text.classList.toggle('test');
//     // text.classList.add('test1');
    
    
//         // text.className = 'test';
//         // document.querySelector('img').attributes[1].value = 'https://i.redd.it/lsknlqcnihza1.jpg';
// }
// btn.onclick = changeTopia;




// const changeColor = ()=>{
//     text.style.color = 'red';
//     text.style.backgroundColor = 'green';
//     text.style.transition = '1s';
//     text.style.fontSize = '40px'
// }

// btn.addEventListener('click',changeColor,true);


// btn.ondblclick = ()=>{
    // btn.onmousedown = ()=>{
//     btn.onclick =function(){
//     text.style.color = 'red';
// }

// btn.onmouseover = ()=>{
//     text.style.color = 'green';
// }


console.log(text.style);