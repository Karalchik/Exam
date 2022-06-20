class ArrOfLevels {
    constructor(levels) {
        this.levels = levels;
    }

    getLevels() {
        return this.levels;
    }
}
class Game extends ArrOfLevels {
    constructor(Levels) {
        super(Levels);
        this.score = 0;
        this.level = 1;
        this.score_e = document.querySelector('#for_score');
        this.level_e = document.querySelector('#for_level');
        this.isPause = false;
        this.isStarted = false;
    }

    setGameBoard(objOfGameBoard) {
        this.objOfGameBoard = objOfGameBoard
    }

    setFigure(figure) {
        this.figure = figure
    }

    reset() {
        this.level = 1;
        this.score = 0;
        this.level_e.innerHTML = this.level;
        this.score_e.innerHTML = this.score;
        this.isPause = true;
        document.querySelector('#pause_play').innerHTML = 'Keep Playing';
        clearTimeout(this.sTime);
        this.objOfGameBoard.playField = makeCopy(emptyField);
        this.objOfGameBoard.drawBoard();
        document.querySelector('#game_over').style = 'visibility:visible;';
    }

    pauseGame() {
        if (this.isPause === true) {
            document.querySelector('#pause_play').innerHTML = 'Pause';
            this.isPause = false;
            document.querySelector('#game_over').style = 'visibility:hidden;';
        } else {
            document.querySelector('#pause_play').innerHTML = 'Keep Playing'
            this.isPause = true;
            document.querySelector('#game_over').style = 'visibility:hidden;';
        }
        this.sTime = setTimeout(function () {
            game.startGameLoop()
        }, super.getLevels()[this.level].speed);
    }

    startGameLoop() {
        this.isStarted = true;
        if (!this.isPause) {
            this.figure.moveFigureDown();
            this.objOfGameBoard.updateActiveFigure();
            this.objOfGameBoard.drawBoard();
            this.figure.drawNextFigure();
            this.sTime = setTimeout(function () {
                game.startGameLoop()
            }, super.getLevels()[this.level].speed);
            document.querySelector('#start_game').disabled = true;
        }
    }
}