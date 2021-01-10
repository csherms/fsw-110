// 2. Create a list of 5 H2 elements on the DOM using a for loop

var myHeader = document.createElement ("h2");
var headerRepeat = document.getElementById ("head");


for (i = 0; i < 5; i++) {
    myHeader.innerHTML = "Header";
    headerRepeat.innerHTML += "<h2>" + myHeader.innerHTML + "</h2>"

// 3. Using the .style property.

    headerRepeat.style.fontSize = '20px';
    headerRepeat.style.fontWeight = 'lighter';
    headerRepeat.style.fontFamily = 'sans-serif';
    headerRepeat.style.color = 'cornflowerblue';
    
}


// 5. Add class to elements being created using classList

document.querySelector("#head").classList.add("border");




