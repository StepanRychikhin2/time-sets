const box = document.querySelector(".bob");
const lickli = document.querySelector(".lickli");
let bank = 0;
box.addEventListener("click", cliclik)

function cliclik() {
    bank ++
    lickli.textContent = `кількість очок і кліків на  кубик   ${bank}`;


}

setInterval(changeRun, 1000)



function changeRun() {
    const max = 400;
    const marginTop = Math.random() * (max - 1) + 1;
    const marginleft = Math.random() * (max - 1) + 1;
    

    box.style.marginTop = `${marginTop}px`
    box.style.marginLeft = `${marginleft}px`
}