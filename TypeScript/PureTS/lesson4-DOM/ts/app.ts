

// const input:any = document.querySelector('input') as HTMLInputElement;
var input:any = document.querySelector<HTMLInputElement>('input');
var btn:any = document.querySelector("button") as HTMLButtonElement;

btn.onclick=():void=>{
    alert(input.value)
}


fetch("https://jsonplaceholder.typicode.com/todos")
.then((res:any)=>res.json())
.then((data:any)=>console.log(data))