// Board

var blocksize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

// Snake Head
var snakex = blocksize * 5;
var snakey = blocksize * 5;

//Food
var foodx;
var foody;

//Velocity
var velocityx=0;
var velocityy=0;

window.onload = function(){
    board = document.getElementById("board");
    board.height = rows * blocksize;
    board.width = cols * blocksize;
    context = board.getContext("2d");

    placefood();
    document.addEventListener("keyup", changedirection);
    setInterval(update, 1000/10);
}

function  update(){
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "lime";
    snakex =+ velocityx* blocksize;
    snakey = + velocityy* blocksize;
    context.fillRect(snakex, snakey , board.width, board.height);

    context.fillStyle = "red";
    context.fillRect(foodx, foody , board.width, board.height);
}


function placefood(){
    foodx = Math.floor(Math.random() * cols) * blocksize;
    foody = Math.floor(Math.random() * rows) * blocksize;
}


function changedirection(){
    if(e.code == "ArrowUp"){
        velocityy = -1;
        velocityx = 0;
    }

    if(e.code == "ArrowDown"){
        velocityy = 1;
        velocityx = 0;
    }

    if(e.code == "ArrowRight"){
        velocityy = 0;
        velocityx = 1;
    }

    if(e.code == "ArrowLeft"){
        velocityy = 0;
        velocityx = -1;
    }
}