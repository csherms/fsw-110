//Selecting Form Elements with Javascript.
let title = document.getElementById("title");
let description = document.getElementById("description");
let buttonVar = document.getElementById("buttonSub");
let toDoList = document.getElementById("toDo");
let formVar = document.getElementById("form");
//Add Tasks to the List.
function addListItem() {
    if ((title.value != "") && (description.value != "")) {
        //List Item.
        let listItem = document.createElement("li");
        listItem.textContent = "Task: " + title.value + " === " + description.value;
        toDoList.append(listItem);
        //Delete Button.
        let deleteListItem = document.createElement("button");
        deleteListItem.classList = "Delete";
        deleteListItem.textContent = "Delete";
        listItem.append(deleteListItem);
        //Reset Form for next Task to be created.
        form.reset();
        //Alert the user they have not filled out the form.
    } else(alert("Please enter a value for BOTH fields. Thank You!"));
}
//When the user clicks run this Function.
buttonVar.addEventListener("click", addListItem);
//Delete list Items from the To-Do List.
toDoList.addEventListener("click", function(e) {
    let deleteButton = document.getElementsByClassName("Delete");
    for (i = 0; i < deleteButton.length; i++) {
        if (e.target == deleteButton[i]) {
            let deleted = deleteButton[i].parentNode;
            toDoList.removeChild(deleted);
        }
    }
});