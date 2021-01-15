// Blue when the mouse hovers over the square.
document.getElementById("box").addEventListener("mouseover", mouseover);
function mouseover() {
    document.querySelector("#box").style.backgroundColor = "blue";
}

// Red when the mouse button is held down over the square.
document.getElementById("box").addEventListener("mousedown", mousedown);
function mousedown() {
    document.querySelector("#box").style.backgroundColor = "red";
}

// Yellow when the mouse button is let go over the square.
document.getElementById("box").addEventListener("mouseup", mouseup);
function mouseup() {
    document.querySelector("#box").style.backgroundColor = "yellow";
}

// Green when the mouse is double clicked in the square.
document.getElementById("box").addEventListener("dblclick", dblclick);
function dblclick() {
    document.querySelector("#box").style.backgroundColor = "green";
}

// Orange when the mouse scroll is used somewhere in the window (not just over the square).
window.addEventListener("wheel", wheel);
function wheel() {
    document.querySelector("#box").style.backgroundColor = "orange";
}

// Keys for different colors. "B" = blue, "R" = red, "Y" = yellow, "G" green, "O" = orange.
document.onkeydown = function() {
    var keyCode = window.event ? window.event.keyCode : event.which;
    changeColor(keyCode);
}
function changeColor(keyCode) {
    if (keyCode == 66 ) { // b
        document.getElementById("box").style.backgroundColor = "blue";
    } else if (keyCode == 82 ) { // r
        document.getElementById("box").style.backgroundColor = "red";
    } else if (keyCode == 89) {
        document.getElementById("box").style.backgroundColor = "yellow";
    } else if (keyCode == 71) {
        document.getElementById("box").style.backgroundColor = "green";
    } else if (keyCode == 71) {
        document.getElementById("box").style.backgroundColor = "green";
    } else if (keyCode == 79) {
        document.getElementById("box").style.backgroundColor = "orange";
}
}
