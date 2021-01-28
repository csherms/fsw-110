const form = document.myForm;

form.addEventListener("submit", (event) => {
    event.preventDefault()
    alert(`
    Name: ${form.firstName.value} ${form.lastName.value}
    Age: ${form.age.value} 
    Gender: ${form.gender.value}
    Destination: ${form.options.value}
    Dietary Restrictions: ${dietStuff()}`);
})


const checkedInputs = [];
function dietStuff(){
for(let i = 0; i < form.diet.length; i++){
    if(form.diet[i].checked){
        checkedInputs.push(form.diet[i].value);
}
}
return(checkedInputs)
}