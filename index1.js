
let num = 0;

let id = setInterval(function() {
    num ++;
    if (num === 5) {
        clearInterval(id)
        console.log("awd");
    } else {
        
        alert(`"hello"`)
    }
    
    console.log(num);
}, 1000);

