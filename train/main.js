const button = document.querySelector("button");
const output = document.getElementById("output");

button.addEventListener("click",function(){
    output.textContent = "按到了";
});