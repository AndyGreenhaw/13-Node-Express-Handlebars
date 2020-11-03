$(function(){
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
});