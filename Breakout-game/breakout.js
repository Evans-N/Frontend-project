let canvas = document.querySelector(".myCanvas");
let ctx = canvas.getContext("2d");
let xAxis = canvas.width/2;
let yAxis = canvas.height-30;
let xCurrent = 2;
let yCurrent = -2;
let ballRadius = 3;
let paddleHeight = 10;
let paddleWidth = 75;
let paddleLocation = (canvas.width-paddleWidth) /2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(xAxis, yAxis, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    if(xAxis + xCurrent > canvas.width-ballRadius || xAxis + xCurrent < ballRadius) {
        xCurrent = -xCurrent;
    }
    if(yAxis + yCurrent > canvas.height-ballRadius || yAxis + yCurrent < ballRadius) {
        yCurrent = -yCurrent;
    }
    xAxis += xCurrent;
    yAxis += yCurrent;
}
function paddleCreation(){
    ctx.beginPath();
    ctx.rect(paddleLocation, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
setInterval(draw, 10);
