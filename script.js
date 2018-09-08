setInterval(function(){ draw() }, 25);
setInterval(function(){ cycleMode(getRandomInt(0, 9), getRandomInt(0,9), getRandomInt(0,9)) }, 25);

function draw() {
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");

    var probabilityPercentage = 10;
    var prob = probabilityPercentage * 0.01;

    flash();
}

function cycleMode(prob1, prob2, prob3) {
    if (prob1 < 2)  vertical(c.width, c.height);
    if (prob2 < 2)  horisontal(c.width, c.height);
    if (prob3 < 2)  syre();

}

function horisontal(width, height) {
    ctx.fillStyle = getRandomColor(getRandomInt(0,9));
    for (var x = 0; x < width; x+= 20) {
        ctx.fillRect(x, 0, 10, height);
    }
}

function vertical(width, height) {
    ctx.fillStyle = getRandomColor(getRandomInt(0,9));
    for (var y = 0; y < height; y+= 20) {
        ctx.fillRect(0, y, width, 10);
    }
}

function syre() {
    ctx.fillStyle = getRandomColor(getRandomInt(0,9));
    for (var x = 0; x < c.width; x += 15) {
        for (var y = 0; y < c.height; y += 15) {
            ctx.fillStyle = getRandomColor(getRandomInt(0,9));
            ctx.fillRect(x, y, 10, 10)
        }
    }
}

function flash() {
    ctx.fillStyle = getRandomColor(getRandomInt(0,9));
    ctx.fillRect(0, 0, c.width, c.height);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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