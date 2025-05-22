let day = Math.floor(Math.random()*7)+1;

if(day>=1&&day<5){
  console.log("Not Friday,yet!");
}else if(day === 5){
  console.log("TGIF");
}else if(day === 6||day === 7){
  console.log("Yay,weekends!");
  console.log("Wait, what day is it?");
}