console.log("jeg er i ddcolor");


const colArray = ["red", "green", "yellow", "blue", "orange"]

const ddColor = document.getElementById("ddColor")

let bdy = document.querySelector("body")

function fillDropdown(item) {
    const el = document.createElement("option")
    el.textContent = item
    ddColor.appendChild(el)

}

function addColors(btn) {
    ddColor.innerHTML=""
    colArray.forEach(fillDropdown)
    console.log(document.all)

}

function setBackGroundColor() {
    const selindex= ddColor.selectedIndex;
    const selectedOption = ddColor.options[selindex]
    const color = selectedOption.innerText
    bdy.style.backgroundColor = color
}

const pbFillDropdown = document.getElementById("pbFillDropDown")


pbFillDropdown.addEventListener('click',addColors)

ddColor.addEventListener('change', setBackGroundColor)