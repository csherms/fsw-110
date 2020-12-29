// This is my Header
var myHeader = document.createElement('h1');
myHeader.innerText = 'Welcome to my JS site!'
myHeader.style.color = 'red';
myHeader.style.textAlign = 'center';
document.body.append(myHeader);

// This is my Paragraph
var myParagraph = document.createElement('p');
myParagraph.innerText = 'All of this was created with JavaScript';
myParagraph.style.color = 'blue';
myParagraph.style.fontSize = '30px';
myParagraph.style.textAlign = 'left';
document.body.append(myParagraph);

// This is my Ordered List
var items = ['Java', 'Script', 'Is', 'Complicated!'];
var list = document.createElement('ol');
items.forEach(function (item) {
	var li = document.createElement('li');
    li.textContent = item;
    li.style.color = '#3908C7';
	list.appendChild(li);
});
document.body.append(list); 

// This is my shoutout to Prof Farley!