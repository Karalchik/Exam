class ArrOfBoards {
    constructor(playField) {
        this.playField = playField;
    }

    getPlayField() {
        return this.playField;
    }
}
class GameBoard extends ArrOfBoards {
    constructor(playField) {
        super(playField);
        this.main = document.querySelector('.main');
    }

    setGame(objOfGame) {
        this.objOfGame = objOfGame
    }

    setFigure(figure) {
        this.figure = figure
    }

    fixFigure() {
        for (let i = 0; i < super.getPlayField().length; i++) {
            for (let j = 0; j < super.getPlayField()[i].length; j++) {
                if (super.getPlayField()[i][j] === 1) {
                    super.getPlayField()[i][j] = 2;
                }
            }
        }
        this.checkAndRemoveRows();
    }

    checkAndRemoveRows() {
        let canDell = true;
        let countDell = 0;
        var canvas = document.getElementById('canva').getContext('2d');
        for (let i = 0; i < super.getPlayField().length; i++) {
            for (let j = 0; j < super.getPlayField()[i].length; j++) {
                if (super.getPlayField()[i][j] !== 2) {
                    canDell = false;
                    break;
                }
            }
            if (canDell) {
                super.getPlayField().splice(i, 1)
                super.getPlayField().splice(0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
                countDell += 1;
            }
            canDell = true;
        }
        switch (countDell) {
            case 0:
                this.objOfGame.score += 0;
                break;
            case 1:
                this.objOfGame.score += this.objOfGame.getLevels()[this.objOfGame.level].scorePerLine;
                canvas.clearRect(1, 1, 600, 300);
                canvas.font = "38px serif";
                canvas.strokeText("Wow,but only one", 10, 50);
                break;
            case 2:
                this.objOfGame.score += this.objOfGame.getLevels()[this.objOfGame.level].scorePerLine * 2;
                canvas.clearRect(1, 1, 600, 300);
                canvas.font = "38px serif";
                canvas.strokeText("Very Nice,dude", 10, 50);
                break;
            case 3:
                this.objOfGame.score += this.objOfGame.getLevels()[this.objOfGame.level].scorePerLine * 3.5;
                canvas.clearRect(1, 1, 600, 300);
                canvas.font = "38px serif";
                canvas.strokeText("O my god!It's top", 10, 50);
                break;
            case 4:
                this.objOfGame.score += this.objOfGame.getLevels()[this.objOfGame.level].scorePerLine * 5;
                canvas.clearRect(1, 1, 600, 300);
                canvas.font = "38px serif";
                canvas.strokeText("Holy Shit,bro !", 10, 50);
                break;
            default:
                break;
        }
        if (this.objOfGame.score >= this.objOfGame.getLevels()[this.objOfGame.level].updateLevel) {
            this.objOfGame.level += 1;
        }
        this.objOfGame.level_e.innerHTML = this.objOfGame.level;
        this.objOfGame.score_e.innerHTML = this.objOfGame.score;
    }

    hasBordAct() {
        for (let i = 0; i < this.figure.first_fugo.shape.length; i++) {
            for (let j = 0; j < this.figure.first_fugo.shape[i].length; j++) {
                if (this.figure.first_fugo.shape[i][j] &&
                    (super.getPlayField()[this.figure.first_fugo.y + i] === undefined ||
                        super.getPlayField()[this.figure.first_fugo.y + i][this.figure.first_fugo.x + j] === undefined ||
                        super.getPlayField()[this.figure.first_fugo.y + i][this.figure.first_fugo.x + j] === 2
                    )
                ) {
                    return true;
                }
            }
        }
        return false;
    }

    updateActiveFigure() {
        this.removePrevActive();
        for (let i = 0; i < this.figure.first_fugo.shape.length; i++) {
            for (let j = 0; j < this.figure.first_fugo.shape[i].length; j++) {
                if (this.figure.first_fugo.shape[i][j]) {
                    super.getPlayField()[this.figure.first_fugo.y + i][this.figure.first_fugo.x + j] = this.figure.first_fugo.shape[i][j]
                }
            }
        }
    }

    drawBoard() {
        let mainInnerHTML = '';
        for (let i = 0; i < super.getPlayField().length; i++) {
            for (let j = 0; j < super.getPlayField()[i].length; j++) {
                if (super.getPlayField()[i][j] === 1) {
                    mainInnerHTML += '<div class="cell cell_move"></div>'
                }
                if (super.getPlayField()[i][j] === 2) {
                    mainInnerHTML += '<div class="cell cell_stop"></div>'
                }
                if (super.getPlayField()[i][j] === 0) {
                    mainInnerHTML += '<div class="cell"></div>'
                }
            }
        }
        this.main.innerHTML = mainInnerHTML;
    }

    removePrevActive() {
        for (let i = 0; i < super.getPlayField().length; i++) {
            for (let j = 0; j < super.getPlayField()[i].length; j++) {
                if (super.getPlayField()[i][j] === 1) {
                    super.getPlayField()[i][j] = 0;
                }
            }
        }
    }

}