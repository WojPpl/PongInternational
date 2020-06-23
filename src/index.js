import "./styles.css";
import Player from "./player";
import Ball from "./ball";
import KeyboardHandle from "./keyboard";

let gameCanvas = document.getElementById("game");
let canvasContext = gameCanvas.getContext('2d');

const GAME_WIDTH = 973;
const GAME_HEIGHT = 600;

let player = new  Player(GAME_WIDTH, GAME_HEIGHT);

let ball = new Ball(GAME_WIDTH, GAME_HEIGHT, player);

new KeyboardHandle(player);

player.draw(canvasContext);

let previousTime = 0;

const gameLoop = (time)  => {
    let timeChange = time - previousTime;
    previousTime = time;

    canvasContext.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    player.update(timeChange);
    player.draw(canvasContext);

    ball.update(timeChange);
    ball.draw(canvasContext);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
