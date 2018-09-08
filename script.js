/* Runs the main function 40 (1000 / 25 = 40) timers per second */
setInterval(function(){ main() }, 25);

/* Runs the cycleMode function 40 (1000 / 25 = 40) timers per second and gives it 3 random number between 0 and 9 */
setInterval(function(){ cycleMode(getRandomIntInRange(0, 9), getRandomIntInRange(0, 9), getRandomIntInRange(0, 9)) }, 25);

var canvas, draw;

/* Initializes the fields and runs the flash function  */
function main() {
    canvas = document.getElementById("myCanvas");
    draw = canvas.getContext("2d");
    flash();
}

/* Cycles the different modes : if the random number between 0 - 9 is less then 2 it uses that mode */
/* All three modes can be combined by random chance in various ways */
function cycleMode(prob1, prob2, prob3) {
    if (prob1 < 2)  vertical(canvas.width, canvas.height);
    if (prob2 < 2)  horizontal(canvas.width, canvas.height);
    if (prob3 < 2)  acid();
}

/* Draws horizontal lines in random colors */
function horizontal(width, height) {
    draw.fillStyle = getRandomColor(getRandomIntInRange(0, 9));
    for (var x = 0; x < width; x+= 20) {
        draw.fillRect(x, 0, 10, height);
    }
}

/* Draws vertical lines in random colors */
function vertical(width, height) {
    draw.fillStyle = getRandomColor(getRandomIntInRange(0, 9));
    for (var y = 0; y < height; y+= 20) {
        draw.fillRect(0, y, width, 10);
    }
}

/* Draws a checkerboard pattern of squares in random colors */
function acid() {
    draw.fillStyle = getRandomColor(getRandomIntInRange(0, 9));
    for (var x = 0; x < canvas.width; x += 15) {
        for (var y = 0; y < canvas.height; y += 15) {
            draw.fillStyle = getRandomColor(getRandomIntInRange(0, 9));
            draw.fillRect(x, y, 10, 10)
        }
    }
}

/* Creates the background color of the screen in a random color - This one has a 100% chance to trigger unlike the other shapes */
function flash() {
    draw.fillStyle = getRandomColor(getRandomIntInRange(0, 9));
    draw.fillRect(0, 0, canvas.width, canvas.height);
}


/* Generates a random number between min & max including both of em */
function getRandomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Picks a color depending on the random number it receives */
function getRandomColor(i) {
    switch(i) {
        case 0: return "#0062FF"; break;
        case 1: return "#ff3000"; break;
        case 2: return "#00ff1a"; break;
        case 3: return "#FF0099"; break;
        case 4: return "#FF00FF"; break;
        case 5: return "#9D00FF"; break;
        case 6: return "#00FFFF"; break;
        case 7: return "#FFFF00"; break;
        case 8: return "#35ff99"; break;
        case 9: return "#00FF66"; break;
    }
}