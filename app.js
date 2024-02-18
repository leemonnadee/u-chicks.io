const typed = new Typed('#typewriter', {
    strings: ['into deliciousness with us!','it up with us!','into your cravings with us!'],
    typeSpeed: 120, // Adjust the typing speed here (in milliseconds)
    backSpeed: 60, // Adjust the backspacing speed here (in milliseconds)
    loop: true,
    loopCount: Infinity,
    smartBackspace: true,
    shuffle: false,
    contentType: 'html',
  });


          // JavaScript to add active class to the current link
          document.addEventListener("DOMContentLoaded", function() {
            var navLinks = document.querySelectorAll('.navbar-nav a');

            navLinks.forEach(function(navLink) {
                navLink.addEventListener('click', function() {
                    navLinks.forEach(function(link) {
                        link.classList.remove('active-link');
                    });
                    this.classList.add('active-link');
                });
            });
        });


        // JavaScript for the parallax effect
document.addEventListener("DOMContentLoaded", function() {
    var parallaxElements = document.querySelectorAll('.parallax');
    var parallaxInstances = [];

    parallaxElements.forEach(function(element) {
        var instance = new Parallax(element, {
            relativeInput: true,
            hoverOnly: true,
            invertX: false,
            invertY: false,
            scalarX: 10,
            scalarY: 10
        });
        parallaxInstances.push(instance);
    });
});

$(document).ready(function() {
    // Activate carousel
    $('#productReviewsCarousel').carousel({
        interval: 100, // Set the auto slide interval time in milliseconds (2000ms = 2 seconds)
        pause: 'hover' // Pause on mouse hover
    });
});