// const input:any = document.querySelector('input') as HTMLInputElement;
var input = document.querySelector('input');
var btn = document.querySelector("button");
btn.onclick = function () {
    alert(input.value);
};
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (res) { return res.json(); })
    .then(function (data) { return console.log(data); });
