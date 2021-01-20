// Addition Function:
function add(){
var a,b,c;
a = Number(document.getElementById("addFirst").value);
b = Number(document.getElementById("addSecond").value);
c = a + b;
document.getElementById("addAnswer").value = c;
}

// Subtraction Function:
function sub(){
var a,b,c;
a = Number(document.getElementById("subFirst").value);
b = Number(document.getElementById("subSecond").value);
c = a - b;
document.getElementById("subAnswer").value = c;
}

// Multiplication Function:
function mul(){
var a,b,c;
a = Number(document.getElementById("mulFirst").value);
b = Number(document.getElementById("mulSecond").value);
c = a * b;
document.getElementById("mulAnswer").value = c;
}