var canvas = document.getElementById("myCanvas");
var render = canvas.getContext("2d");
var width;
var height;
canvas.style.left = "0px";
canvas.style.top = "0px";
canvas.style.position = "absolute";

window.onresize = function() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    loop();
}
window.onresize();


function loop() {
    background(25, 25, 25);
    Player.draw();
}
var target_fps = 30;
setInterval(loop, 1000/target_fps);