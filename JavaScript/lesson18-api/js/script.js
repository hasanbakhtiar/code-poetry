fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data=>{
    let li = "";
    data.slice(0,10).map(item=>(
        li+=`<li><img src="${item.image}" width="100" />${item.title}</li>`
    ))
    document.querySelector('ul').innerHTML  = li;
})

.catch((err)=>{console.log(err)})



// try {
//     console.log('hello');
// } catch (err) {
//     console.log('burda problem var');
// }