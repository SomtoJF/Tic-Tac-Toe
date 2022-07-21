let okbutton = document.getElementById('okbutton');
let instructions = document.getElementById('instructions');
let instructionsText = document.getElementById('text');
let gameboard = document.getElementsByClassName('cell');
let restartButton = document.getElementById('restart');

let player = function (name, marker){
    return {name, marker};
};
let player1 = player('Player 1', 'X');
let player2 = player('Player 2', 'O');

let play = (function(){
    let roundCount = 1;

    function restart(){
        roundCount = 1;
        for(let i = 0; i < gameboard.length; i++){
            gameboard[i].textContent = '';
        };
    }

    okbutton.addEventListener('click', ()=>{
        restart();
        instructions.style.display = 'none'
    });

    restartButton.addEventListener('click', restart)

    let checkWinner = ()=>{
        const combinations = function (){

            for(let i = 0; i < 7; i++){
                if(gameboard[i].textContent != ""){
                    if(gameboard[i].textContent == gameboard[i+1].textContent && gameboard[i].textContent == gameboard[i+2].textContent){
                        if(i == 0 || i == 3 || i == 6){
                            if(gameboard[i].textContent == player1.marker){
                                instructions.style.display = 'flex';
                                instructionsText.textContent = 'X wins';
                            }
                            else{
                                instructions.style.display = 'flex';
                                instructionsText.textContent = 'O wins';
                            };
                        };
                    }
                    else if(i < 3 && gameboard[i].textContent == gameboard[i+3].textContent && gameboard[i].textContent == gameboard[i+6].textContent){
                            if(gameboard[i].textContent == player1.marker){
                                instructions.style.display = 'flex';
                                instructionsText.textContent = 'X wins';
                            }
                            else{
                                instructions.style.display = 'flex';
                                instructionsText.textContent = 'O wins';
                            };
                    }
                    else if(gameboard[i].textContent == gameboard[4].textContent && gameboard[i].textContent == gameboard[8].textContent){
                        if(i == 0){
                            if(gameboard[i].textContent == player1.marker){
                                instructions.style.display = 'flex';
                                instructionsText.textContent = 'X wins';
                            }
                            else{
                                instructions.style.display = 'flex';
                                instructionsText.textContent = 'O wins';
                            };
                        };
                    }
                    else if(i == 2 && gameboard[i].textContent == gameboard[i+2].textContent && gameboard[i].textContent == gameboard[i+4].textContent){
                            if(gameboard[i].textContent == player1.marker){
                                instructions.style.display = 'flex';
                                instructionsText.textContent = 'X wins';
                            }
                            else{
                                instructions.style.display = 'flex';
                                instructionsText.textContent = 'O wins';
                            };
                    }
                }
                else{
                    continue;
                };
            }
        };
        combinations();
        roundCount++;
    };

    for(let i = 0; i < gameboard.length; i++){
        gameboard[i].addEventListener('click', ()=>{
            if(roundCount%2 == 0){
                if(gameboard[i].textContent == ''){
                    gameboard[i].textContent = player2.marker;
                    checkWinner();
                    
                };
            }
            else{
                if(gameboard[i].textContent == ''){
                    gameboard[i].textContent = player1.marker;
                    checkWinner();
                    
                };
            };
            
        })
    };
})();

