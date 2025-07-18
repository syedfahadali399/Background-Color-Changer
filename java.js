let changeColor = document.getElementById("get-color")
let body = document.getElementById("body")

document.getElementById("submit").addEventListener("click", () => {
    let checkColor = changeColor.value
    body.style.backgroundColor = checkColor
})

document.getElementById("reset").addEventListener("click", () => {
    body.style.backgroundColor = "white"
})