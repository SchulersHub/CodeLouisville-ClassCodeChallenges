// Part 1: Create a new div of class "planet" and set its background color
// to the color of your choice.  Then, append it to the body in the DOM.


var planet = document.createElement('div');
planet.style.background = "linear-gradient(to right, purple, green, blue, green, purple)";
planet.setAttribute('class', 'planet');
document.body.appendChild(planet);
planet.setAttribute('id','planet ');


// Part 2: Create a new div of class "moon" and append it to the planet in the DOM.

var moon = document.createElement('div');
moon.style.background ="linear-gradient(to right, white, gray, white)";
moon.setAttribute('class','moon');
planet.appendChild(moon);


// Part 3: Make the Div Move
