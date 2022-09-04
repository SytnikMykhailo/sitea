$(function() {
    /* Menu nav toggle */
    $("#nav_menu").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
});
