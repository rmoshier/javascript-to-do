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

        $("#list").append($listItem);
        $($listItem).hide().fadeIn("slow");
        $("ul").sortable();
      }

    });

    $( "#list" ).click(function() {
      $( "#li" ).remove();
    });

  });
