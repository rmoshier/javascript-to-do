  $(function () {

    $("#addTask").click(function() {
      event.preventDefault();

      var task = $("#task").val();
      $("#task").val(null);

      if (task !== "null" && task !== "") {
        var $listItem = $("<li><a href=''>x  " + task + "</li>");

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
      $( "#list1, #list2, #list3" ).sortable({
        connectWith: ".list"
      }).disableSelection();
    });
  });

  $( "x" ).click(function() {
    $( "li" ).remove();
  });
