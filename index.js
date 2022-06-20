var main=document.querySelector('.main');
var score=0;
let level=1;
let isPause=false;
let isStarted=false;
let sTime;

let Levels={
    1:{
        scorePerLine:60,
        speed:750,
        updateLevel:100,
    },
    2:{
        scorePerLine:50,
        speed:500,
        updateLevel:200, 
    },
    3:{
        scorePerLine:40,
        speed:400,
        updateLevel:300,
    },
    4:{
        scorePerLine:30,
        speed:350,
        updateLevel:400, 
    },
    5:{
        scorePerLine:20,
        speed:200,
        updateLevel:Infinity,
    }
}

var tetris={
    O:[
        [1,1],
        [1,1],
    ],
    I:[
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0],
    ],
    S:[
        [0,1,1],
        [1,1,0],
        [0,0,0],
    ],
    Z:[
        [1,1,0],
        [0,1,1],
        [0,0,0],
    ],
    L:[
        [1,0,0],
        [1,1,1],
        [0,0,0],
    ],
    J:[
        [0,0,1],
        [1,1,1],
        [0,0,0],
    ],
    T:[
        [1,1,1],
        [0,1,0],
        [0,0,0],
    ]
}

var score_e=document.querySelector('#for_score');
var level_e=document.querySelector('#for_level');
var tetr_e=document.querySelector('.for_tetr');

var first_fugo=getNewTetr();
var second_fugo=getNewTetr();

var playfield=[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
];


//убрать за ней следы 1 ++
function removePrevActive(){
    for(let i=0;i<playfield.length;i++){
        for(let j=0;j<playfield[i].length;j++){
        if(playfield[i][j]===1){
            playfield[i][j]=0;
        }
        } 
    }   
}
//на пробел 2 ++
function dropTetr(){
    for(let i=first_fugo.y;i<playfield.length;i++){
        first_fugo.y+=1;
        if(hasBordAct()){
            first_fugo.y-=1;
            break;
        }
    }
}
//тетресинка за полем 1 ++
function makeNext(){
    let nextTetrH=''
    for(let i=0;i<second_fugo.shape.length;i++){
        for (let j = 0; j < second_fugo.shape[i].length; j++) {
            if(second_fugo.shape[i][j]==1){
                nextTetrH+='<div class="cell cell_move"></div>'
            }
            if(second_fugo.shape[i][j]==0){
                nextTetrH+='<div class="cell"></div>'
            }
        }
        nextTetrH+='<br>'
    }
    tetr_e.innerHTML=nextTetrH;
}
//отрисовать тетресинку 1 ++
function updateActive(){
    removePrevActive();
    for(let i=0;i<first_fugo.shape.length;i++){
        for(let j=0;j<first_fugo.shape[i].length;j++){
        if(first_fugo.shape[i][j]){
            playfield[first_fugo.y+i][first_fugo.x+j]=first_fugo.shape[i][j]
        }
        } 
    }
}
//сделать поле для тетриса 1 ++
function makeABoard(){
let mainInnerHTML='';
for(let i=0;i<playfield.length;i++){
    for(let j=0;j<playfield[i].length;j++){
        if(playfield[i][j]==1){
            mainInnerHTML+='<div class="cell cell_move"></div>'
        }
        if(playfield[i][j]==2){
            mainInnerHTML+='<div class="cell cell_stop"></div>'
        }
        if(playfield[i][j]==0){
            mainInnerHTML+='<div class="cell"></div>'
        }
    }
}
main.innerHTML=mainInnerHTML;
}
//повернуть тетресинку 2 ++
function rotateTetr(){
    const prevTetrState = first_fugo.shape;
    first_fugo.shape=first_fugo.shape[0].map((val,index)=>
    first_fugo.shape.map((row)=>row[index]).reverse()
    );
    if(hasBordAct()){
    first_fugo.shape=prevTetrState;
    }
}
//остановка по кнопке 1 ++
function pauseGame(){
    if(isPause==true){
        document.querySelector('#pause_play').innerHTML='Pause';
        isPause=false;
        document.querySelector('#game_over').style='visibility:hidden;';
    }
    else{
        document.querySelector('#pause_play').innerHTML='Keep Playing'
        isPause=true;
        document.querySelector('#game_over').style='visibility:hidden;';
    }
    sTime = setTimeout(startGame,Levels[level].speed);
}
//гейм овер 1 ++
function reset(){
    level=1;
    score=0;
    level_e.innerHTML=level;
    score_e.innerHTML=score;
    isPause=true;
    document.querySelector('#pause_play').innerHTML='Keep Playing';
    clearTimeout(sTime);
    playfield=[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
];
    makeABoard();
    document.querySelector('#game_over').style='visibility:visible;';
}
//движение в низ на одну строчку 2 ++
function moveTetrDown(){
    if(isPause!=true){
    first_fugo.y+=1;
    if(hasBordAct()){
        first_fugo.y-=1;
        fixTetr();
        remAllCInL();
        first_fugo=second_fugo;
        if(hasBordAct())
        {
            reset();
        }
        second_fugo=getNewTetr();
    }
    }
}
//создать новую терисинку 2 ++
function getNewTetr(){
    const a='IOLJTSZ';
    const rand = Math.floor(Math.random()*7);
    const newTetr=tetris[a[rand]]
    return {x:Math.floor((10-newTetr[0].length)/2),
            y:0,
            shape:newTetr
        };
}
//есть ли соприкасновения с 2 или выходы за масив 2 ++
function hasBordAct(){
    for(let i=0;i<first_fugo.shape.length;i++){
        for(let j=0;j<first_fugo.shape[i].length;j++){
            if(first_fugo.shape[i][j] &&
                (playfield[first_fugo.y+i]===undefined ||
                playfield[first_fugo.y+i][first_fugo.x+j]===undefined ||
                playfield[first_fugo.y+i][first_fugo.x+j]===2
                )   
                )
            {
            return true;
            }
        } 
    }  
    return false;
}
//убрать все заполненые ряды 1 ++
function remAllCInL(){
    let canDell=true;
    let countDell=0;
    for(let i=0;i<playfield.length;i++){
        for(let j=0;j<playfield[i].length;j++){
            if(playfield[i][j]!==2){
                canDell=false;
                break;
            }
        }
        if(canDell){
        playfield.splice(i,1)
        playfield.splice(0,0,[0,0,0,0,0,0,0,0,0,0])
        countDell+=1;
        }
        canDell=true;
    }
    switch(countDell){
        case 0:
            score+=0;
            break;
        case 1:
            score+=Levels[level].scorePerLine;
            break;
        case 2:
            score+=Levels[level].scorePerLine*2;
            break;
        case 3:
            score+=Levels[level].scorePerLine*3.5;
            break;
        case 4:
            score+=Levels[level].scorePerLine*5;
            break;
        default:
            break;
    }
    if(score>=Levels[level].updateLevel){
        level+=1;
    }
    level_e.innerHTML=level;
    score_e.innerHTML=score;
    countDell=0;
}
//фиксация 1 ++
function fixTetr(){
    for(let i=0;i<playfield.length;i++){
        for(let j=0;j<playfield[i].length;j++){
            if(playfield[i][j]===1){
                playfield[i][j]=2;
            }
        }
    }

    remAllCInL();
}

makeABoard();

document.onkeydown=function(event){
    if(isPause!=true && isStarted==true){
    if(event.keyCode===37){
        first_fugo.x-=1;
        if(hasBordAct()){
            first_fugo.x+=1;
        }
    }
    if(event.keyCode===32){
        dropTetr();
    }
    if(event.keyCode===39){
        first_fugo.x+=1;
        if(hasBordAct()){
            first_fugo.x-=1;
        }
    }
    if(event.keyCode===40){
        moveTetrDown()
    }
    if(event.keyCode===38){
        rotateTetr()
    }
    updateActive();
    makeABoard();
}
}
level_e.innerHTML=level;
score_e.innerHTML=score;
updateActive();
makeABoard();
makeNext(); 
//++
function startGame(){
    isStarted=true;
    if(!isPause){
    moveTetrDown();
    updateActive();
    makeABoard();
    makeNext();
    sTime = setTimeout(startGame,Levels[level].speed);
    document.querySelector('#start_game').disabled=true;
    }
}
