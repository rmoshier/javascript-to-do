$(function () {

  for ( i = 1; i < 4; i++ ){
    $("#list").append("<li>I'm a list item!</li>");
  }

  // var list = document.getElementById("list");
  // var button = document.getElementById("addTask");
  //
  // for (i = 1; i < 4; i++) {
  //   var newListItem = document.createElement("li");
  //   newListItem.innerHTML = "I'm list item #" + i;
  //   list.appendChild(newListItem);
  // }

  document.getElementById("addTask").onclick = addTask;

  button.onclick = newToDo;
});
