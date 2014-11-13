$(function () {

  for ( i = 1; i < 4; i++ ){
    $("#list").append("<li>Sample item</li>");
  }

  $("#addTask").click(function() {
    event.preventDefault();

    var task = $("#task").val();

    if (task !== "null" && task !== "") {
      var $listItem = $("<li>" + task + "</li>");

      $("#list").append($listItem);
    }

    document.getElementById("task").value = "";
  });
});
