const grid = document.querySelector(".grid");

let color = "red";

let mouseDown = false;
grid.onmousedown = function () {
    mouseDown = true;
}
grid.onmouseup = function () {
    mouseDown = false;
}

for (let i = 0; i < 32; i++) {
    let row = document.createElement("div")
    row.classList.add("row");
    row.id = "e-" + i;

    for (let j = 0; j < 32; j++) {
        let div = document.createElement("div");
        div.id = "e-" + i + "-" + j;
        div.classList.add("element")
        div.onmouseover = function () {
            if (mouseDown)
                this.style.backgroundColor = color;
        }
        div.onmousedown = function () {
            this.style.backgroundColor = color;
        }
        row.appendChild(div);
    }

    grid.appendChild(row);
}

document.querySelector("#clear").addEventListener(
    "click",
    function () {
        let elems = document.getElementsByClassName("element");
        for (let i = 0; i < elems.length; i++) {
            elems[i].style.backgroundColor = "white";
        }
    }
);

let colorButtons = document.querySelector(".color-menu").children;
for (let i = 0; i < colorButtons.length; i++) {
    console.log(colorButtons[i].className);
    colorButtons[i].style.backgroundColor = String(colorButtons[i].className);
    colorButtons[i].onclick = function () {
        color = colorButtons[i].className;
    }
}
