//carousel code adapted from W3 schools at https://www.w3schools.com/howto/howto_js_slideshow.asp
var index = 1;
show_image(index);

//prev and next controls
function cycle_image(n) {
    index += n;
    show_image(index);
}

//dot control
function specific_image(n) {
    index = n;
    show_image(index);
}

//manipulates the carousel to show the correct image
function show_image(n) {
    var slides = document.getElementsByClassName("carousel_slide");
    var dots = document.getElementsByClassName("carousel_dot");
    //wraps from end to beginning if needed
    if(n > slides.length) {
        index = 1;
    }
    //wraps from beginning to end if needed
    if(n < 1) {
        index = slides.length;
    }
    //hides all of the slides
    for(i = 0; i < slides.length; ++i) {
        slides[i].style.display = "none";
    }
    //making all the dots show as inactive
    for(i = 0; i < dots.length; ++i) {
        dots[i].className = dots[i].className.replace(" carousel_active", "");
    }
    //lastly, show the correct slide and the correct dot
    slides[index - 1].style.display = "block";
    dots[index - 1].className += " carousel_active";
}