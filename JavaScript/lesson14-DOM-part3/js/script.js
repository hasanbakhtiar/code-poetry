
const ul = document.querySelector('ul');
const input = document.querySelector('input');
// const btn = document.querySelector('button');
const form = document.querySelector('form');


form.onsubmit=(e)=>{
    e.preventDefault();
     if (!input.value) {
    alert("niko getdi")
 }else{
    const li = document.createElement('li');
    li.innerHTML = input.value;
    ul.appendChild(li);
    input.value = "";

    
    li.onclick=()=>{
        if (!li.className ) {
            li.setAttribute("class","red");
        }else{
            li.setAttribute("class","green")
        }
    }

   
    li.ondblclick = ()=>{
        li.remove();
    }
 }

}



// btn.onclick = ()=>{

//  if (!input.value) {
//     alert("niko getdi")
//  }else{
//     const li = document.createElement('li');
//     li.innerHTML = input.value;
//     ul.appendChild(li);
//     input.value = "";

    
//     li.onclick=()=>{
//         if (!li.className ) {
//             li.setAttribute("class","red");
//         }else{
//             li.setAttribute("class","green")
//         }
//     }

//     // li.onclick = ()=>{
//     //     if (li.style.textDecoration == "none") {
//     //         li.style.textDecoration = "line-through"
//     //     }else{
//     //         li.style.textDecoration = "none"
//     //     }
//     // }
//     li.ondblclick = ()=>{
//         li.remove();
//     }
//  }
    
// }


// const newHeaderText = document.createElement("h1");
// const newHeaderTextContent = document.createTextNode("Derse bax");
// newHeaderText.appendChild(newHeaderTextContent)
// document.body.appendChild(newHeaderText);




// document.querySelector('button').onclick =()=>{
//     console.log(document.querySelector('input').value);
// }


// const info = document.querySelector('h1');


// info.innerHTML = document.querySelector('ul').firstChild.firstChild.parentNode.nextSibling.firstChild.nodeValue;


