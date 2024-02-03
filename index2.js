const boxElem = document.querySelector(".box");
const boxElem2 = document.querySelector(".box2");
const boxElem3 = document.querySelector(".box3");
setInterval(chanheColor, 300)
setInterval(shangeWidth, 350)
setInterval(changeBorder, 300)



function chanheColor() {
    const red = Math.random() * (255 - 1) + 1;
    const green = Math.random() * (255 - 1) + 1;
    const blue = Math.random() * (255 - 1) + 1;

boxElem.style.backgroundColor = `rgb(${red},${green}, ${blue})`

}


function shangeWidth() {
    const max = 400;
    const min = 100;
    const randomWidth = Math.random() * (max - 1) + 1;
    const randomHeith = Math.random() * (max - 1) + 1;
    boxElem2.style.width = `${randomWidth}px`
    boxElem2.style.height = `${randomHeith}px`
}


function changeBorder() {
    const red = Math.random() * (255 - 1) + 1;
    const green = Math.random() * (255 - 1) + 1;
    const blue = Math.random() * (255 - 1) + 1;

boxElem3.style.border = ` solid rgb(${red},${green}, ${blue}) 6px`

}