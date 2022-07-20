let okbutton = document.getElementById('okbutton');
let instructions = document.getElementById('instructions');
let gameboard = document.getElementsByClassName('cell');
let restartButton = document.getElementById('restart');

let player = function (name, marker){
    return {name, marker};
};
let player1 = player('Player 1', 'X');
let player2 = player('Player 2', 'O');

void function(){
    okbutton.addEventListener('click', ()=>instructions.style.display = 'none');

    restartButton.addEventListener('click', ()=>{
        for(let i = 0; i < gameboard.length; i++){
            gameboard[i].textContent = '';
        };
    })

    let roundCount = 1;
    for(let i = 0; i < gameboard.length; i++){
        gameboard[i].addEventListener('click', ()=>{
            if(roundCount%2 == 0){
                if(gameboard[i].textContent == ''){
                    gameboard[i].textContent = player2.marker;
                    roundCount++;
                };
            }
            else{
                if(gameboard[i].textContent == ''){
                    gameboard[i].textContent = player1.marker;
                    roundCount++;
                };
            };
            
        })
    };
}();

let play = (function(){
    
})()
