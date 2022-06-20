class ArrOfTetris {
    constructor(array) {
        this.array = array;
    }

    getArr() {
        return this.array;
    }
}
class Figure extends ArrOfTetris {
    constructor(array) {
        super(array);
        this.first_fugo = this.getNewFigure();
        this.second_fugo = this.getNewFigure();
        this.tetr_e = document.querySelector('.for_tetr');
    }

    setGameBoard(objOfGameBoard) {
        this.objOfGameBoard = objOfGameBoard;
    }

    setGame(objOfGame) {
        this.objOfGame = objOfGame;
    }

    getNewFigure() {
        const a = 'IOLJTSZ';
        const rand = Math.floor(Math.random() * 7);
        const newFigure = super.getArr()[a[rand]]
        return {
            x: Math.floor((10 - newFigure[0].length) / 2),
            y: 0,
            shape: newFigure
        };
    }

    rotateFigure() {
        const prevFigureState = this.first_fugo.shape;
        this.first_fugo.shape = this.first_fugo.shape[0].map((val, index) =>
            this.first_fugo.shape.map((row) => row[index]).reverse()
        );
        if (this.objOfGameBoard.hasBordAct()) {
            this.first_fugo.shape = prevFigureState;
        }
    }

    dropFigure() {
        for (let i = this.first_fugo.y; i < this.objOfGameBoard.playField.length; i++) {
            this.first_fugo.y += 1;
            if (this.objOfGameBoard.hasBordAct()) {
                this.first_fugo.y -= 1;
                break;
            }
        }
    }

    drawNextFigure() {
        let nextFigureH = ''
        for (let i = 0; i < this.second_fugo.shape.length; i++) {
            for (let j = 0; j < this.second_fugo.shape[i].length; j++) {
                if (this.second_fugo.shape[i][j] === 1) {
                    nextFigureH += '<div class="cell cell_move"></div>'
                }
                if (this.second_fugo.shape[i][j] === 0) {
                    nextFigureH += '<div class="cell"></div>'
                }
            }
            nextFigureH += '<br>'
        }
        this.tetr_e.innerHTML = nextFigureH;
    }

    moveFigureDown() {
        if (this.objOfGame.isPause !== true) {
            this.first_fugo.y += 1;
            if (this.objOfGameBoard.hasBordAct()) {
                this.first_fugo.y -= 1;
                this.objOfGameBoard.fixFigure();
                this.objOfGameBoard.checkAndRemoveRows();
                this.first_fugo = this.second_fugo;
                if (this.objOfGameBoard.hasBordAct()) {
                    this.objOfGame.reset();
                }
                this.second_fugo = this.getNewFigure();
            }
        }
    }
}