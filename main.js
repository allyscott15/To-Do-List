let inputfield = document.getElementById("input field")
let inputcontainer = document.getElementById("input container")
let addtodobutton = document.getElementById("add todo button")
let listcontainer = document.getElementById("list container")

let addListItem = function (event) {
    if ((event.key === "Enter" || event.type === "click") && inputfield.value != "") {
        let div = document.createElement("div")
        let removeButton = document.createElement("button")
        let paragraph = document.createElement("p")
        removeButton.classList.add("list-item")
        paragraph.classList.add("list-item")
        div.appendChild(removeButton)
        div.appendChild(paragraph)
        removeButton.innerText = "X"
        paragraph.innerText = inputfield.value;
        listcontainer.prepend(div);
        inputfield.value = "";
        removeButton.addEventListener("click", function(){
            div.remove()
        })
    }
}

addtodobutton.addEventListener("click", addListItem)
inputfield.addEventListener("keyup", addListItem)