console.log("jeg er i set background")

function setBackgroundColor() {
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
    pbCol.style.color = col;
}

function useColorPicker() {
    let col = inpColorPicker.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
    pbCol.style.color = col;
}


let inpColorValue = document.querySelector(".inpColorValue")
let inpColorPicker = document.getElementById("inpColorPicker")

let inp = document.querySelector(".inpColor")
console.log(inp)

let pbCol = document.querySelector(".pbSetColor")
console.log(pbCol)

pbCol.textContent = "Tryk mig for at sætte color"

let bdy = document.querySelector("body")

console.log(bdy)

const pTags = document.getElementsByTagName('p')
console.log(pTags)

let pTagArr = Array.from(pTags);
console.log("pTagArr")
console.log(pTagArr)
pTagArr.forEach(p => p.textContent = "hej fra ");

pbCol.addEventListener('click', setBackgroundColor);

document.addEventListener('keyup', setBackgroundColor);

inpColorPicker.addEventListener('input', useColorPicker);

