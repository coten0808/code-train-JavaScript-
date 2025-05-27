const hero = [
    {name: "pantheon",role: "fighter",ult: "grandStarfall"},
    {name: "viego",role: "fighter",ult: "heartreaker"},
    {name: "xinZhao",role: "fighter",ult: "crescentGuard"}
];

hero.forEach((hero) => {
    const btn = document.getElementById(hero.name);
    
    if(btn){
        btn.addEventListener("click", () => {
            const heroList = document.getElementById("hero-list");
            heroList.innerHTML = "";
            const li = document.createElement("li");
            li.textContent = hero.name + " , " + hero.role + " , " + hero.ult;
            heroList.appendChild(li);

        })
    }


})