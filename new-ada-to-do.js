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
      $( "#list1" ).draggable(
        // cancel: "a.ui-icon", // clicking an icon won't initiate dragging
        // revert: "invalid", // when not dropped, the item will revert back to its initial position
        // containment: "document",
        // helper: "clone",
        // cursor: "move"
      );
      $( "#list2" ).droppable({
        drop: function( event, ui ) {
          $( this )
            .addClass( "ui-state-highlight" )
            .find( "li" )
              .html( "Dropped!" );
        }
      });
    });
  });
