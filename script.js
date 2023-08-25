$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});


    $(document).ready(function() {
        // Add smooth scrolling to all links with a class of .nav-link
        $(".nav-link").on('click', function(event) {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Get the target section's ID from the link's href attribute
            var target = $(this).attr("href");

            // Calculate the offset of the target section
            var offset = $(target).offset().top;

            // Animate the scroll to the target section
            $('html, body').animate({
                scrollTop: offset
            }, 800); // You can adjust the animation speed (800 milliseconds in this example)
        });
    });

