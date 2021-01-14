//carousel code adapted from W3 schools at https://www.w3schools.com/howto/howto_js_slideshow.asp

images = document.getElementsByClassName("carousel_image");
numbers = document.getElementById("carousel_numbers");

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
//n is the number (1 based indexxing) image we want to show
function show_image(n) {
    //wraps the index if it will go out of bounds
    index = (n > images.length) ? 1 : index;
    index = (n < 1) ? images.length : index;
    //loops through the images, hiding all the ones except the correct one
    //on the correct one, update the slide number too
    for(i = 0; i < images.length; ++i) {
        if(index - 1 == i) {
            images[i].style.display = "block";
            numbers.innerHTML = index + "/" + images.length;
            //uses CSS transition to have the numbers fade in, then fades them out here
            numbers.style.opacity = "1";
            setTimeout(function(){numbers.style.opacity = "0"}, 2000);
        }
        else {
            images[i].style.display = "none";
        }
    }
}
