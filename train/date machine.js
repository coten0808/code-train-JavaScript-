const button = document.querySelector("button");
const dateList = document.getElementById("date-list");

button.addEventListener("click", function(){
    const now = new Date().toLocaleDateString();
    const t=document.createElement("li");
    t.textContent=now;
    dateList.appendChild(t);

})