console.log("jeg er i color2")

const colArray2 = [["red","#ff0000"], ["green","#00ff00"], ["yellow","#ffff00"], ["purple","#1f35a9"]];

const colorObjects = [{"red":"#ff0000"}, {"green":"#00ff00"}, {"yellow":"#ffff00"}, {"purple":"#1f35a9"}]
const colorObjects2 = [{"name":"red","id":"#ff0000"}, {"name":"green","id":"#00ff00"}, {"name":"yellow","id":"#ffff00"}, {"name":"purple","id":"#1f35a9"}]

const ddColor2 = document.getElementById("ddColor2")
const pbFillDropdown2 = document.getElementById("pbFillDropDown2")

console.log(bdy)

function fillDropdown2(item) {
    const el = document.createElement("option")
    el.textContent = item[0]
    el.value = item [1]
    ddColor2.appendChild(el)

}

function fillDropdownObj(item) {
    const el = document.createElement("option")
    console.log(item)
    el.textContent = item.name
    el.value = item.id //tager enten object eller parameter som value
    ddColor2.appendChild(el)
}

function addColors2(btn) {
    ddColor2.innerHTML= ""
    colArray2.forEach(fillDropdown2)
    console.log(document.all)

}

function setBackgroundColor2(el) {
    const selindex = ddColor2.selectedIndex
    const selectedOption = ddColor2.options[selindex]
    const color = selectedOption.innerText
    console.log(color)
    bdy.style.backgroundColor = color
}

function setBackgroundColorObj(el) {
    const selindex = ddColor2.selectedIndex
    const selectedOption = ddColor2.options[selindex]
    const color = selectedOption.value //value.id
    console.log(color)
    bdy.style.backgroundColor = color
}


pbFillDropdown2.addEventListener('click',addColors2)

ddColor2.addEventListener('change', setBackgroundColor2)