//waits until the body has finished loading all it's objects to begin the buttons' fade in
document.body.onload=fade_buttons_in();

//buttons' initial opacity is set to 0, so simply uses their given CSS transition time to change it to 1
//could wrap the buttons in a container and change its opacity, but it doesn't cut down that much in space or time
function fade_buttons_in() {
    //uses query function to get all objects with this class
    var buttons = document.querySelectorAll(".home_button");
    for(i = 0; i < buttons.length; ++i) {
        buttons[i].style.opacity = "1";
    }
}

//handles navigation to the correct page based on the button clicked/pressed
document.getElementById("games").onclick=function(){window.location.pathname = "/games/index.html";};
document.getElementById("mods").onclick=function(){window.location.pathname = "/mods/index.html";};
document.getElementById("other").onclick=function(){window.location.pathname = "/other/index.html";};
document.getElementById("aboutme").onclick=function(){window.location.pathname = "/aboutme/index.html";};

//looks like document and window (I guess all yellow highlighted keywords?) are optional/implied, but
//I will still make it a habit to use them for maximum readability
