function clickButton(){
    var inputOne = document.getElementById("inputOne");
    var inputTwo = document.getElementById("inputTwo");
    var inputThree = document.getElementById("inputThree")

    alert(inputOne.value + " " + inputTwo.value + " " + inputThree.value);
    
    document.getElementById("inputOne").value = "";
    document.getElementById("inputTwo").value = "";
    document.getElementById("inputThree").value = "";
}