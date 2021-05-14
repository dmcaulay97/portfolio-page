//materialize element js
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

//define dom element variables
const welcomeLetters = $("#welcome-text").children();

//coding functionality that makes the weloce colors change
let colorCounter = 0
const colorArray = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
const interval = setInterval(function () {
    for (let i = 0; i < welcomeLetters.length; i++) {
        let letter = welcomeLetters[i];
        let colorIndex = i + colorCounter;
        if (colorIndex > 6) {
            colorIndex = colorIndex % 7;
        }
        $(letter).css("color", colorArray[colorIndex]);
    }
    if (colorCounter > 5) {
        colorCounter = 0;
    } else {
        colorCounter++;
    }
}, 75);
