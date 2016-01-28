// Global Variables 
var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTaskHolder = document.getElementById("incomplete-tasks");
var completeTaskHolder = document.getElementById("completed-tasks"); 


//EVENT HANDLERS 

// add a new task
var addTask = function(){
  
  //When button is pressed 
  console.log("adding a task . . . "); 
  //create a new list item with the text from #new-task

      // input ()
      // label 
      // input
      // button.edit
      // button.delete
      // each element, needs modified and appended 
}


// edit an existing task
var editTask = function(){
	console.log("edit a task . . . ");
    // when edit button is pressed 
      // if the class of the parent is .editMode
      // switch from editMode 
      // label text become input value
    //else 
      // switch to editMode
      //input value becomes the label text

      // toggel editMode on the parent 
}



// delete an existing task
var deleteTask = function(){
	console.log("delete a task . . .")
     // when the delete button is pressed 
         // remove the parent list item from the ul 

}



// mark task as complete
var taskCompleted = function(){
	console.log("completed a task . . .")
      // when checkbox is checked 
         // append the task list item to the #completed-tasks
}



// mark task as incomplete 
var taskIncompleted = function(){
	 console.log("task marked as incomplete . . .")
       // when checkbox is not checked 
         // append the task list  item to the #incomplete-tasks
}


var bindEvents = function(taskListItem, checkBoxEventHandler){
	console.log("bind list items")
     // select its children
       var checkbox = taskListItem.querySelector("input[type=checkbox]");
       var editButton = taskListItem.querySelector("button.edit");
       var deleteButton = taskListItem.querySelector("button.delete");;  
     // bind editTask to edit button 
       editButton.onclick = editTask;
     // bind deleteTask to delete button 
       deleteButton.onclick = deleteTask;
     // bind checkBoxEventHandler to checkbox 
       checkbox.onchange = checkBoxEventHandler;

}

//WIREING 

//Set the click handler to the addTask function

addButton.onclick = addTask;




// Cycle over IncompleteTaskHolder ul list items 
for(var i = 0; i < incompleteTaskHolder.children.length; i++){
   // for each list item 
     // bind events to list items children (taskcompleted)
   bindEvents(incompleteTaskHolder.children[i], taskCompleted);
}

for(var i = 0; i < completeTaskHolder.children.length; i++){
   // for each list item 
     // bind events to list items children (taskcompleted)
   bindEvents(completeTaskHolder.children[i], taskIncompleted);
}

// Cycle over CompleteTaskHolder ul list items 
   // for each list item 
     // bind events to list items children (taskIncompleted)

















