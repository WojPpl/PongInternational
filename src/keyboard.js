class KeyboardHandle {
    constructor(player) {
        document.addEventListener("keydown", event => {
            //ArrowUp // ArrowDown // z // a
            switch (event.key) {
                case "ArrowUp":
                    player.moveUp();
                    break;
                case "ArrowDown":
                    player.moveDown();
                    break;

            }
        });
        document.addEventListener("keyup", event => {
            //ArrowUp // ArrowDown // z // a
            switch (event.key) {
                case "ArrowUp":
                    if(player.direction < 0)
                    player.stop();
                    break;
                case "ArrowDown":
                    if(player.direction > 0)
                    player.stop();
                    break;

            }
        });
    }
}

export default KeyboardHandle