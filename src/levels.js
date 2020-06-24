import Alien from "./alien";

const createLevel = (level) => {
    let aliens = [];

    level.map((alienRow, rowIndex) => {
        alienRow.map((alien, index) => {
            alien === 1 && aliens.push(new Alien( {x: 75 * index, y: 80 * rowIndex}));
        })
    });

    return aliens
}

const level1 = [
    [1, 0, 1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1],
    [1, 0, 1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1],
    [1, 0, 1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1],
    [1, 0, 1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,1 ,1]
];

const level2 = [
    [0, 1, 0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,1 ,0],
    [1, 0, 0 ,0 ,1 ,1 ,1 ,0 ,0 ,0 ,0 ,1],
    [0, 1, 0 ,0 ,1 ,1 ,1 ,0 ,0 ,0 ,1 ,0],
    [1, 0, 0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0,1]
];

const level3 = [
    [0, 0, 1 ,0 ,0 ,1 ,1 ,0 ,0 ,1 ,0 ,0],
    [0, 0, 1 ,0 ,0 ,1 ,1 ,0 ,0 ,1 ,0 ,0],
    [0, 0, 1 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0],
    [0, 0, 0 ,1 ,1 ,1 ,1 ,1 ,1 ,0 ,0 ,0]
];

const level4 = [
    [0, 0, 1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0],
    [0, 0, 0 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,0 ,0],
    [0, 0, 0 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,0 ,0],
    [0, 0, 1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0]
];

const getLevels = levelIndex => {
    switch (levelIndex) {
        case 1: return level1;
        case 2: return level2;
        case 3: return level3;
        case 4: return level4;
    }
}



export {createLevel, getLevels}