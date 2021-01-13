// 2. Create a list of 5 H2 elements on the DOM using a for loop


for (i = 0; i < 5; i++) {
    var myHeader = document.createElement ("h2");
// 5. Add class to elements being created using classList
    myHeader.classList.add("border");
    myHeader.innerText = "Header";
    document.body.append (myHeader);

// 3. Using the .style property.

    myHeader.style.fontSize = '20px';
    myHeader.style.fontWeight = 'lighter';
    myHeader.style.fontFamily = 'sans-serif';
    myHeader.style.color = 'cornflowerblue';
    
}







