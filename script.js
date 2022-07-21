let okbutton = document.getElementById('okbutton');
let instructions = document.getElementById('instructions');
let gameboard = document.getElementsByClassName('cell');
let restartButton = document.getElementById('restart');

let player = function (name, marker){
    return {name, marker};
};
let player1 = player('Player 1', 'X');
let player2 = player('Player 2', 'O');

let play = (function(){
    let roundCount = 1;
    
    okbutton.addEventListener('click', ()=>instructions.style.display = 'none');

    restartButton.addEventListener('click', ()=>{
        roundCount = 1;
        for(let i = 0; i < gameboard.length; i++){
            gameboard[i].textContent = '';
        };
    })

    let checkWinner = ()=>{
        const combinations = function (){
            
            for(let i = 0; i < gameboard.length; i++){
                if(gameboard[i].textContent != ""){
                    if(gameboard[i].textContent == gameboard[i+1].textContent && gameboard[i].textContent == gameboard[i+2].textContent){
                        if(i != 2 && i != 5){
                            alert('game end');
                        };
                    }
                    else if(gameboard[i].textContent == gameboard[i+3].textContent && gameboard[i].textContent == gameboard[i+6].textContent){
                        if(i < 3){
                            alert('game end');
                        };
                    }
                    else if(gameboard[i].textContent == gameboard[i+4].textContent && gameboard[i].textContent == gameboard[i+8].textContent){
                        if(i == 0){
                            alert('game end');
                        };
                    }
                    else if(gameboard[i].textContent == gameboard[i+2].textContent && gameboard[i].textContent == gameboard[i+4].textContent){
                        if(i == 2){
                            alert('game end');
                        };
                    }
                }
                else{
                    continue;
                };
            }
        };
        combinations();
    };

    for(let i = 0; i < gameboard.length; i++){
        gameboard[i].addEventListener('click', ()=>{
            if(roundCount%2 == 0){
                if(gameboard[i].textContent == ''){
                    gameboard[i].textContent = player2.marker;
                    checkWinner();
                    roundCount++;
                };
            }
            else{
                if(gameboard[i].textContent == ''){
                    gameboard[i].textContent = player1.marker;
                    checkWinner();
                    roundCount++;
                };
            };
            
        })
    };
})();

