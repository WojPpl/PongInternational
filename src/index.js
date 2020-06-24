import "./styles.css";
import Player from "./player";
import Ball from "./ball";
import KeyboardHandle from "./keyboard";
import {createLevel, getLevels} from "./levels";

let gameCanvas = document.getElementById("game");
let canvasContext = gameCanvas.getContext('2d');

const GAME_WIDTH = 973;
const GAME_HEIGHT = 600;

let lives = 3;

let livesShower = document.getElementById("lives");

let player = new  Player(GAME_WIDTH, GAME_HEIGHT);

let currentLevel = 1

let aliens = createLevel(getLevels(currentLevel));

let ball = new Ball(GAME_WIDTH, GAME_HEIGHT, player, lives, aliens);


new KeyboardHandle(player);

player.draw(canvasContext);

let previousTime = 0;

const gameLoop = (time)  => {
    let timeChange = time - previousTime;
    previousTime = time;
    if(lives === 0) {
        livesShower.innerText = lives;
        canvasContext.rect(0,0, GAME_WIDTH, GAME_HEIGHT);
        canvasContext.fillStyle = "rgba(0,0,0,0.6)";
        canvasContext.fill();
        canvasContext.font = "42px sans-serif";
        canvasContext.fillStyle = "#ffffff";
        canvasContext.textAlign = "center";
        canvasContext.fillText("GAME OVER", GAME_WIDTH / 2, GAME_HEIGHT / 2);
    }
    else {
        canvasContext.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
        player.update(timeChange);
        player.draw(canvasContext);
        lives = ball.update(lives, aliens, canvasContext);
        livesShower.innerText = lives;
        ball.draw(canvasContext);
        requestAnimationFrame(gameLoop);
    }

}

requestAnimationFrame(gameLoop);
