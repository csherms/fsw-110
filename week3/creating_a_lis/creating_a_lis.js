// # 2 Create an h1 an append to dom

var myHeader = document.createElement ("h1");
var headerName = document.getElementById ("head");

// # 3 -- Create a for loop to repeat header 10 times

for (i = 0; i < 10; i++) {
    myHeader.innerHTML = "Hello, World!";
    headerName.innerHTML += "<h1>" + myHeader.innerHTML + 
    "</h1>";

// # 4 Add some styles (still inside the for loop.)

    headerName.style.color = 'blue';
    headerName.style.fontSize = '20px';
    headerName.style.fontStyle = 'italic';

}

// # 5 Create a new array using the following information.

var namesArray = ['Steve', 'Larry', 'Joe', 'Shirley', 'Steph', 'Nate', 'Rick', 'Emily',];

var newVar = document.getElementById ("ulNames");

// # 6 Create a for loop that iterates through the array.

for (i = 0; i < namesArray.length; i++) {
    newVar.innerHTML += "<li>" + namesArray[i] + "</li>"
}

