// class ArrOfBoards {
//     constructor(playField) {
//         this.playField = playField;
//     }

//     getPlayField() {
//         return this.playField;
//     }
// }

// class ArrOfLevels {
//     constructor(levels) {
//         this.levels = levels;
//     }

//     getLevels() {
//         return this.levels;
//     }
// }

// class ArrOfTetris {
//     constructor(array) {
//         this.array = array;
//     }

//     getArr() {
//         return this.array;
//     }
// }

// class GameBoard extends ArrOfBoards {
//     constructor(playField) {
//         super(playField);
//         this.main = document.querySelector('.main');
//     }

//     setGame(objOfGame) {
//         this.objOfGame = objOfGame
//     }

//     setFigure(figure) {
//         this.figure = figure
//     }

//     fixFigure() {
//         for (let i = 0; i < super.getPlayField().length; i++) {
//             for (let j = 0; j < super.getPlayField()[i].length; j++) {
//                 if (super.getPlayField()[i][j] === 1) {
//                     super.getPlayField()[i][j] = 2;
//                 }
//             }
//         }
//         this.checkAndRemoveRows();
//     }

//     checkAndRemoveRows() {
//         let canDell = true;
//         let countDell = 0;
//         for (let i = 0; i < super.getPlayField().length; i++) {
//             for (let j = 0; j < super.getPlayField()[i].length; j++) {
//                 if (super.getPlayField()[i][j] !== 2) {
//                     canDell = false;
//                     break;
//                 }
//             }
//             if (canDell) {
//                 super.getPlayField().splice(i, 1)
//                 super.getPlayField().splice(0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
//                 countDell += 1;
//             }
//             canDell = true;
//         }
//         switch (countDell) {
//             case 0:
//                 this.objOfGame.score += 0;
//                 break;
//             case 1:
//                 this.objOfGame.score += this.objOfGame.getLevels()[this.objOfGame.level].scorePerLine;
//                 break;
//             case 2:
//                 this.objOfGame.score += this.objOfGame.getLevels()[this.objOfGame.level].scorePerLine * 2;
//                 break;
//             case 3:
//                 this.objOfGame.score += this.objOfGame.getLevels()[this.objOfGame.level].scorePerLine * 3.5;
//                 break;
//             case 4:
//                 this.objOfGame.score += this.objOfGame.getLevels()[this.objOfGame.level].scorePerLine * 5;
//                 break;
//             default:
//                 break;
//         }
//         if (this.objOfGame.score >= this.objOfGame.getLevels()[this.objOfGame.level].updateLevel) {
//             this.objOfGame.level += 1;
//         }
//         this.objOfGame.level_e.innerHTML = this.objOfGame.level;
//         this.objOfGame.score_e.innerHTML = this.objOfGame.score;
//     }

//     hasBordAct() {
//         for (let i = 0; i < this.figure.first_fugo.shape.length; i++) {
//             for (let j = 0; j < this.figure.first_fugo.shape[i].length; j++) {
//                 if (this.figure.first_fugo.shape[i][j] &&
//                     (super.getPlayField()[this.figure.first_fugo.y + i] === undefined ||
//                         super.getPlayField()[this.figure.first_fugo.y + i][this.figure.first_fugo.x + j] === undefined ||
//                         super.getPlayField()[this.figure.first_fugo.y + i][this.figure.first_fugo.x + j] === 2
//                     )
//                 ) {
//                     return true;
//                 }
//             }
//         }
//         return false;
//     }

//     updateActiveFigure() {
//         this.removePrevActive();
//         for (let i = 0; i < this.figure.first_fugo.shape.length; i++) {
//             for (let j = 0; j < this.figure.first_fugo.shape[i].length; j++) {
//                 if (this.figure.first_fugo.shape[i][j]) {
//                     super.getPlayField()[this.figure.first_fugo.y + i][this.figure.first_fugo.x + j] = this.figure.first_fugo.shape[i][j]
//                 }
//             }
//         }
//     }

//     drawBoard() {
//         let mainInnerHTML = '';
//         for (let i = 0; i < super.getPlayField().length; i++) {
//             for (let j = 0; j < super.getPlayField()[i].length; j++) {
//                 if (super.getPlayField()[i][j] === 1) {
//                     mainInnerHTML += '<div class="cell cell_move"></div>'
//                 }
//                 if (super.getPlayField()[i][j] === 2) {
//                     mainInnerHTML += '<div class="cell cell_stop"></div>'
//                 }
//                 if (super.getPlayField()[i][j] === 0) {
//                     mainInnerHTML += '<div class="cell"></div>'
//                 }
//             }
//         }
//         this.main.innerHTML = mainInnerHTML;
//     }

//     removePrevActive() {
//         for (let i = 0; i < super.getPlayField().length; i++) {
//             for (let j = 0; j < super.getPlayField()[i].length; j++) {
//                 if (super.getPlayField()[i][j] === 1) {
//                     super.getPlayField()[i][j] = 0;
//                 }
//             }
//         }
//     }

// }

// class Game extends ArrOfLevels {
//     constructor(Levels) {
//         super(Levels);
//         this.score = 0;
//         this.level = 1;
//         this.score_e = document.querySelector('#for_score');
//         this.level_e = document.querySelector('#for_level');
//         this.isPause = false;
//         this.isStarted = false;
//     }

//     setGameBoard(objOfGameBoard) {
//         this.objOfGameBoard = objOfGameBoard
//     }

//     setFigure(figure) {
//         this.figure = figure
//     }

//     reset() {
//         this.level = 1;
//         this.score = 0;
//         this.level_e.innerHTML = this.level;
//         this.score_e.innerHTML = this.score;
//         this.isPause = true;
//         document.querySelector('#pause_play').innerHTML = 'Keep Playing';
//         clearTimeout(this.sTime);
//         this.objOfGameBoard.playField = makeCopy(emptyField);
//         this.objOfGameBoard.drawBoard();
//         document.querySelector('#game_over').style = 'visibility:visible;';
//     }

//     pauseGame() {
//         if (this.isPause === true) {
//             document.querySelector('#pause_play').innerHTML = 'Pause';
//             this.isPause = false;
//             document.querySelector('#game_over').style = 'visibility:hidden;';
//         } else {
//             document.querySelector('#pause_play').innerHTML = 'Keep Playing'
//             this.isPause = true;
//             document.querySelector('#game_over').style = 'visibility:hidden;';
//         }
//         this.sTime = setTimeout(function () {
//             game.startGameLoop()
//         }, super.getLevels()[this.level].speed);
//     }

//     startGameLoop() {
//         this.isStarted = true;
//         if (!this.isPause) {
//             this.figure.moveFigureDown();
//             this.objOfGameBoard.updateActiveFigure();
//             this.objOfGameBoard.drawBoard();
//             this.figure.drawNextFigure();
//             this.sTime = setTimeout(function () {
//                 game.startGameLoop()
//             }, super.getLevels()[this.level].speed);
//             document.querySelector('#start_game').disabled = true;
//         }
//     }
// }

// class Figure extends ArrOfTetris {
//     constructor(array) {
//         super(array);
//         this.first_fugo = this.getNewFigure();
//         this.second_fugo = this.getNewFigure();
//         this.tetr_e = document.querySelector('.for_tetr');
//     }

//     setGameBoard(objOfGameBoard) {
//         this.objOfGameBoard = objOfGameBoard;
//     }

//     setGame(objOfGame) {
//         this.objOfGame = objOfGame;
//     }

//     getNewFigure() {
//         const a = 'IOLJTSZ';
//         const rand = Math.floor(Math.random() * 7);
//         const newFigure = super.getArr()[a[rand]]
//         return {
//             x: Math.floor((10 - newFigure[0].length) / 2),
//             y: 0,
//             shape: newFigure
//         };
//     }

//     rotateFigure() {
//         const prevFigureState = this.first_fugo.shape;
//         this.first_fugo.shape = this.first_fugo.shape[0].map((val, index) =>
//             this.first_fugo.shape.map((row) => row[index]).reverse()
//         );
//         if (this.objOfGameBoard.hasBordAct()) {
//             this.first_fugo.shape = prevFigureState;
//         }
//     }

//     dropFigure() {
//         for (let i = this.first_fugo.y; i < this.objOfGameBoard.playField.length; i++) {
//             this.first_fugo.y += 1;
//             if (this.objOfGameBoard.hasBordAct()) {
//                 this.first_fugo.y -= 1;
//                 break;
//             }
//         }
//     }

//     drawNextFigure() {
//         let nextFigureH = ''
//         for (let i = 0; i < this.second_fugo.shape.length; i++) {
//             for (let j = 0; j < this.second_fugo.shape[i].length; j++) {
//                 if (this.second_fugo.shape[i][j] === 1) {
//                     nextFigureH += '<div class="cell cell_move"></div>'
//                 }
//                 if (this.second_fugo.shape[i][j] === 0) {
//                     nextFigureH += '<div class="cell"></div>'
//                 }
//             }
//             nextFigureH += '<br>'
//         }
//         this.tetr_e.innerHTML = nextFigureH;
//     }

//     moveFigureDown() {
//         if (this.objOfGame.isPause !== true) {
//             this.first_fugo.y += 1;
//             if (this.objOfGameBoard.hasBordAct()) {
//                 this.first_fugo.y -= 1;
//                 this.objOfGameBoard.fixFigure();
//                 this.objOfGameBoard.checkAndRemoveRows();
//                 this.first_fugo = this.second_fugo;
//                 if (this.objOfGameBoard.hasBordAct()) {
//                     this.objOfGame.reset();
//                 }
//                 this.second_fugo = this.getNewFigure();
//             }
//         }
//     }
// }

let tetris = {
    O: [
        [1, 1],
        [1, 1],
    ],
    I: [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    S: [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
    ],
    Z: [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
    ],
    L: [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
    ],
    J: [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
    ],
    T: [
        [1, 1, 1],
        [0, 1, 0],
        [0, 0, 0],
    ]
};
let Levels = {
    1: {
        scorePerLine: 60,
        speed: 750,
        updateLevel: 100,
    },
    2: {
        scorePerLine: 50,
        speed: 500,
        updateLevel: 200,
    },
    3: {
        scorePerLine: 40,
        speed: 400,
        updateLevel: 300,
    },
    4: {
        scorePerLine: 30,
        speed: 350,
        updateLevel: 400,
    },
    5: {
        scorePerLine: 20,
        speed: 200,
        updateLevel: Infinity,
    }
};
const emptyField = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function makeCopy(a) {
    return JSON.parse(JSON.stringify(a));
}

let playField = makeCopy(emptyField);

let gameBoard = new GameBoard(playField)
let game = new Game(Levels)
let figure = new Figure(tetris)

gameBoard.setFigure(figure);
game.setFigure(figure);

gameBoard.setGame(game);
figure.setGame(game);

figure.setGameBoard(gameBoard);
game.setGameBoard(gameBoard);
let a = document.querySelector('#start_game');
let b = document.querySelector('#pause_play');
a.onclick = function () {
    game.startGameLoop()
};
b.onclick = function () {
    game.pauseGame()
};


gameBoard.drawBoard();
document.onkeydown = function (event) {
    if (game.isPause !== true && game.isStarted === true) {
        if (event.keyCode === 37) {
            figure.first_fugo.x -= 1;
            if (gameBoard.hasBordAct()) {
                figure.first_fugo.x += 1;
            }
        }
        if (event.keyCode === 32) {
            figure.dropFigure();
        }
        if (event.keyCode === 39) {
            figure.first_fugo.x += 1;
            if (gameBoard.hasBordAct()) {
                figure.first_fugo.x -= 1;
            }
        }
        if (event.keyCode === 40) {
            figure.moveFigureDown()
        }
        if (event.keyCode === 38) {
            figure.rotateFigure()
        }
        gameBoard.updateActiveFigure();
        gameBoard.drawBoard();
    }
}

game.level_e.innerHTML = game.level;
game.score_e.innerHTML = game.score;
gameBoard.updateActiveFigure();
gameBoard.drawBoard();
figure.drawNextFigure();