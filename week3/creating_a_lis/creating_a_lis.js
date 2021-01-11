// # 2 Create an h1 an append to dom to see if it works.

var myHeader = document.createElement ("h1");
document.body.append (myHeader);

// # 3 -- Create a for loop to repeat header 10 times

for (i = 0; i < 10; i++) {
    var myHeader = document.createElement ("h1");
    myHeader.innerHTML = "Hello, World!";
    document.body.append(myHeader);
    

// # 4 Add some styles (still inside the for loop.)

    myHeader.style.color = 'blue';
    myHeader.style.fontSize = '20px';
    myHeader.style.fontStyle = 'italic';
}


// # 5 Create a new array using the following information.

var namesArray = ['Steve', 'Larry', 'Joe', 'Shirley', 'Steph', 'Nate', 'Rick', 'Emily',];

// # 6 Create a for loop that iterates through the array.

for (i = 0; i < namesArray.length; i++) {
    var list = document.createElement ("ul");
namesArray.forEach (function (item) {
    var li = document.createElement ("li");
        li.textContent = item;
        list.appendChild (li);
});
        
    
}
document.body.append (list);

