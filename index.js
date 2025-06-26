let screen = document.getElementById("screen");
let inputScreen = document.getElementById("input-screen");
let resultScreen = document.getElementById("result-screen");

let buttons =document.querySelectorAll("button")
buttons.forEach(btn=>{
  btn.addEventListener("click", e=>{
    e.preventDefault();
    inputScreen.innerText+= e.target.innerText;
 
  })
})

let clear =document.getElementById("clear");
clear.addEventListener("click", e=>{
  e.preventDefault();
  inputScreen.innerText="";
  resultScreen.innerText="";
  


})

let result = document.getElementById("result")
result.addEventListener("click", e =>{
e.preventDefault();
let expression = inputScreen.innerText;
let ans = eval(expression)
console.log(ans)
resultScreen.innerText= ans

})