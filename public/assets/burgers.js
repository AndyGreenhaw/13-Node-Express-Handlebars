$(function(){

    // Create Burger Function
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerInput").val().trim(),
            devoured: 0
        };

        console.log("READ " + newBurger.burger_name + newBurger.devoured);

        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Created New Burger!");
                location.reload();
            }
        );
    });

    // Delete Burger Function
    $(".delBurger").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });


});