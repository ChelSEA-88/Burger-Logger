
$(document).ready(function() {

    // Add a new burger.
    $(".new-burger-form").on("submit", function(event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#new-burger").val().trim(),
            devoured: 0
        };

        console.log(newBurger);
        //Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added new burger");
            // Reload the page to get the updated burger list.
            location.reload();
        });
    });


    // Eat a burger
    $(".eatbutton").on("click", function(event) {
        event.preventDefault();

        console.log("button clkicked")

        let id = $(this).data("id");
        let devoured = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devoured
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        });
    });


    // Trash an eaten burger
    $(".delete").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });

})