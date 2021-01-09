//carousel code adapted from W3 schools at https://www.w3schools.com/howto/howto_js_slideshow.asp

//page starts by showing the first image
//use 1 based indexxing since the image "number" shown starts at 1
var index = 1;
show_image(index);

//prev and next controls for arrow clicks
function cycle_image(n) {
    index += n;
    show_image(index);
}

//manipulates the carousel to show the correct image
function show_image(n) {
    var slides = document.getElementsByClassName("carousel_slide");
    //wraps from end to beginning if needed
    index = (n > slides.length) ? 1 : index;
    //wraps from beginning to end if needed
    index = (n < 1) ? slides.length : index;
    //loops through the images, hiding all the ones except the correct one
    //on the correct one, update the slide number too
    for(i = 0; i < slides.length; ++i) {
        if(index - 1 == i) {
            slides[i].style.display = "block";
            document.getElementById("carousel_numbers").innerHTML = index + "/" + slides.length;
        }
        else {
            slides[i].style.display = "none";
        }
    }
}
