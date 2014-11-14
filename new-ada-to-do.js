  $(function () {

    // for ( i = 1; i < 4; i++ ){
    //   $("#list").append("<li>Sample item</li>");
    // }

    $("#addTask").click(function() {
      event.preventDefault();

      var task = $("#task").val();
      $("#task").val(null);

      if (task !== "null" && task !== "") {
        var $listItem = $("<li>" + task + "</li>");

        $listItem.click(function(){
          $(this).toggleClass("done");
          removeCheck();
        });

        $("#list1").append($listItem);
        $($listItem).hide().fadeIn("slow");
        $("ul").sortable();
      }

    });

  $(function() {
      $( "#list1, #list2, #list3" ).sortable(
        { connectWith: ".list" }

        // everything can probably be done from the sortable method - don't need the droppable function.

      ).disableSelection();
    });
  });
