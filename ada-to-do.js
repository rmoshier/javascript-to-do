window.onload = init;

function init() {
  var list = document.getElementById("list");

  for (i = 1; i < 4; i++) {
    var newListItem = document.createElement("li");
    newListItem.innerHTML = "I'm list item #" + i;
    list.appendChild(newListItem);
  }

  document.getElementById("addTask").onclick = addTask;

  var button = document.getElementById("addTask");
  button.onclick = newToDo;
}

function newToDo(){
  // this is a click event!
  event.preventDefault();
  var button = document.getElementById("addTask");
  var value = button.form.task.value;

  if (verify()) {
    var list = document.getElementById("list");

    var newListItem4 = document.createElement("li");
    newListItem4.innerHTML = value;

    list.appendChild(newListItem4);

    button.form.task.value = "";
  }
}

function verify(){
  // we are verifying the form here
  var button = document.getElementById("addTask");
  if (button.form.task.value === '') {
    alert('Please enter a task!');
    return false;
  } else {
    return true;
  }
}
