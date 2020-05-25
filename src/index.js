import "./styles.css";
import Player from "./player";
import KeyboardHandle from "./keyboard";

let gameCanvas = document.getElementById("game");
let canvasContext = gameCanvas.getContext('2d');

const GAME_WIDTH = 973;
const GAME_HEIGHT = 600;

let player = new  Player(GAME_WIDTH, GAME_HEIGHT);
canvasContext.fillStyle = 'blue';

new KeyboardHandle(player);

player.draw(canvasContext);

let previousTime = 0;

let ball = document.getElementById("ball");

const gameLoop = (time)  => {
    let timeChange = time - previousTime;
    previousTime = time;

    canvasContext.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    player.update(timeChange);
    player.draw(canvasContext);

    requestAnimationFrame(gameLoop);
}

gameLoop();
