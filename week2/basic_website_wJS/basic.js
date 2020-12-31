// Background Color
document.body.style.backgroundColor = "#eee";

// Navbar
var navBar = ['Home', 'About', 'Contact'];
var links = document.createElement('ul');
navBar.forEach(function (navigation) {
	var li = document.createElement('li');
    li.textContent = navigation;
    li.style.display = 'inline-block';
    li.style.margin = '10px';
    li.style.padding = '10px';
    li.style.fontSize = '20px';
    links.style.textAlign = 'center';
    li.style.color = '#3A0BE0';
    links.appendChild(li);
    document.body.append(links); 
});

// Header
var header = document.createElement('h1');
header.textContent = '- - This is my Page Header - -';
header.style.textAlign = 'center';
header.style.backgroundColor = '#ccc';
header.style.borderRadius = '50px';
header.style.padding = '10px';
document.body.append(header);

// Paragraph
var paragraph = document.createElement('p');
paragraph.style.fontSize = '20px';
paragraph.style.backgroundColor = '#ccc';
paragraph.style.marginRight = '1300px'; 
paragraph.style.borderRadius = '5px'; 
paragraph.style.padding = '10px';
paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quidem impedit? Iste, aliquam voluptatibus dicta quas ea repellat iusto vel suscipit rerum beatae. Assumenda sunt suscipit quo beatae, esse repellat accusamus excepturi, accusantium architecto harum obcaecati, reiciendis dolor illum corporis sit tempore reprehenderit! Quam itaque molestiae dolor nihil velit laboriosam consequuntur nemo voluptates. Voluptatem a rem hic tenetur sit esse architecto natus temporibus perferendis. Id officiis suscipit nostrum repellat aut reprehenderit? Provident alias temporibus dolorum delectus consectetur corporis, ducimus magni modi? Repellat voluptatibus odio ipsa maxime rerum incidunt libero, quos suscipit in ullam tempora accusantium deleniti nulla, corporis rem.';
document.body.append(paragraph);

// List
var list = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];
var items = document.createElement('ul');
list.forEach(function(myList) {
    var li2 = document.createElement('li');
    li2.textContent = myList;
    li2.style.backgroundColor = 'gray';
    li2.style.color = 'white';
    li2.style.listStyleType = 'none';
    li2.style.padding = '1px';  
    li2.style.marginRight = '1700px';
    li2.style.textAlign = 'center';
    li2.style.borderRadius = '50px';
    items.appendChild(li2);
    document.body.append(items);
});

// Footer
var footer = document.createElement('footer');
footer.textContent = '- - This is my Page Footer - -';
footer.style.textAlign = 'center';
footer.style.marginTop = '200px';
footer.style.backgroundColor = '#ccc';
footer.style.borderRadius = '10px';
document.body.append(footer);