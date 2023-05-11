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

var snakeBody= [];
var gameOver = false;

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
    if (gameOver) {
        return;
    }
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);
        context.fillStyle = "red";
    context.fillRect(foodx, foody , blocksize, blocksize);

    if(snakex == foodx && snakey == foody){
        snakeBody.push([foodx,foody]);
        placefood();
    }

    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakex, snakey];
    }

    context.fillStyle = "lime";
    snakex += velocityx* blocksize;
    snakey += velocityy* blocksize;
    context.fillRect(snakex, snakey , blocksize, blocksize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blocksize, blocksize);
    }
    
    if (snakex < 0 || snakex > cols*blocksize || snakey < 0 || snakey > rows*blocksize) {
        gameOver = true;
        alert("Game Over");
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakex == snakeBody[i][0] && snakey == snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over");
        }
    }
}


function placefood(){
    foodx = Math.floor(Math.random() * cols) * blocksize;
    foody = Math.floor(Math.random() * rows) * blocksize;
}


function changedirection(e){
    if(e.code == "ArrowUp" && velocityy!=1){
        velocityy = -1;
        velocityx = 0;
    }

    if(e.code == "ArrowDown" && velocityy!=-1){
        velocityy = 1;
        velocityx = 0;
    }

    if(e.code == "ArrowRight" && velocityx != -1){
        velocityy = 0;
        velocityx = 1;
    }

    if(e.code == "ArrowLeft" && velocityx!=1){
        velocityy = 0;
        velocityx = -1;
    }
}






// window.onload = function() {
//     board = document.getElementById("board");
//     board.height = rows * blockSize;
//     board.width = cols * blockSize;
//     context = board.getContext("2d"); //used for drawing on the board

//     placeFood();
//     document.addEventListener("keyup", changeDirection);
//     // update();
//     setInterval(update, 1000/10); //100 milliseconds
// }



//     context.fillStyle="black";
//     context.fillRect(0, 0, board.width, board.height);

//     context.fillStyle="red";
//     context.fillRect(foodX, foodY, blockSize, blockSize);

//     if (snakeX == foodX && snakeY == foodY) {
//         snakeBody.push([foodX, foodY]);
//         placeFood();
//     }



//     context.fillStyle="lime";
//     snakeX += velocityX * blockSize;
//     snakeY += velocityY * blockSize;
//     context.fillRect(snakeX, snakeY, blockSize, blockSize);
 

//     //game over conditions



// }

// function changeDirection(e) {
//     if (e.code == "ArrowUp" && velocityY != 1) {
//         velocityX = 0;
//         velocityY = -1;
//     }
//     else if (e.code == "ArrowDown" && velocityY != -1) {
//         velocityX = 0;
//         velocityY = 1;
//     }
//     else if (e.code == "ArrowLeft" && velocityX != 1) {
//         velocityX = -1;
//         velocityY = 0;
//     }
//     else if (e.code == "ArrowRight" && velocityX != -1) {
//         velocityX = 1;
//         velocityY = 0;
//     }
// }


