const witeTime = prompt("введіть час через яке пройде повідомлення У СЕКУНДАХ");

const converSec = witeTime + 0 + 0 + 0;
console.log(converSec);
setInterval(changeRun, converSec)



function changeRun() {
   alert("Ось це повідомлення")
}






