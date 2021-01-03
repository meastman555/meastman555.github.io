//waits until the body has finished loading all it's objects to begin the buttons' fade in
//since the buttons are wrapped by a class we can have them fade in uniformly instead of one at a time
document.body.onload=function(){document.getElementById("buttons").style.opacity = "1"};

//handles navigation to the correct page based on the button clicked/pressed
document.getElementById("games").onclick=function(){window.location.pathname = "/games/index.html";};
document.getElementById("mods").onclick=function(){window.location.pathname = "/mods/index.html";};
document.getElementById("other").onclick=function(){window.location.pathname = "/other/index.html";};
document.getElementById("aboutme").onclick=function(){window.location.pathname = "/aboutme/index.html";};

//looks like document and window (I guess all yellow highlighted keywords?) are optional/implied, but
//I will still make it a habit to use them for maximum readability
