document.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(function(element) {
        var position = element.getBoundingClientRect();

        // Check if the element is within the viewport
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});



document.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.local-scroll');

    elements.forEach(function(element) {
        var position = element.getBoundingClientRect();

        // Check if the element is within the viewport
        if (position.top >= 0 && position.bottom <= window.innerHeight + 300) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});
// slide left
// slide left
// slide left
// slide left
document.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.slide-left');

    elements.forEach(function(element) {
        var position = element.getBoundingClientRect();

        // Check if the element is within the viewport
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});
// slide right
// slide right
// slide right
document.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.slide-right');

    elements.forEach(function(element) {
        var position = element.getBoundingClientRect();

        // Check if the element is within the viewport
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});
// animate once
// animate once
// animate once
// animate once
document.addEventListener('scroll', function() {
    var element = document.querySelector('.animate-once');
    var position = element.getBoundingClientRect();

    // Check if the element is within the viewport and hasn't been animated yet
    if (position.top < window.innerHeight && !element.classList.contains('visible')) {
        element.classList.add('visible'); // Trigger animation
    }
});


