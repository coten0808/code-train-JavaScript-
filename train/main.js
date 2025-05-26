const questions = [];
const button = document.querySelector("button");
const input = document.querySelector("input");
const list = document.getElementById("question-list");

button.addEventListener("click",function(){
    const question = input.value.trim();
    if(question === ""){
        return;
    }
    questions.push(question);
    input.value = "";
    list.innerHTML = "";
    questions.forEach(function(q){
        const li = document.createElement("li");
        li.textContent = q;
        list.appendChild(li);
    })
})