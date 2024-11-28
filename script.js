console.log("We are LIVE!")
let userChoice = document.querySelectorAll(".btn");
let humanScore = 0;
let pcScore = 0;
let round = 1;
console.log(userChoice);


function getComputerChoice(){
    let choice = Math.floor(1+Math.random()*3);
    let answer;
    switch (choice){
        case 1:
            answer = "Rock";
        break;
        case 2:
            answer = "Paper";
        break;
        case 3:
            answer = "Scissors";
        break;
    }
    return answer;
}

function getUserChoice(event){
    
    let userChoice =  event.target.textContent;
    console.log(userChoice);
   // userChoice.toLocaleLowerCase;
   switch (userChoice){
    case 1:
        answer = "Rock";
    break;
    case 2:
        answer = "Paper";
    break;
    case 3:
        answer = "Scissors";
    break;
}
let pc = getComputerChoice();
   console.log(match(userChoice,pc));
}

function match(player , pc){
let _player = player;
let _Pc = pc;
display(_player, pc);
    let scoreText = document.querySelector(".score")
    switch(_player){
        case 'Rock':
            if(_Pc == 'Paper'){
                pcScore++;
                return alert(`YOU LOST...`) , scoreText.textContent = `Won: ${humanScore} lost: ${pcScore}`;
            } 
            else if(_Pc == 'Scissors'){
                humanScore++;
                return alert(`YOU WON!`),  scoreText.textContent = `Won: ${humanScore} lost: ${pcScore}`;
            }
            else{
                return alert(`A TIE`), scoreText.textContent = `Won: ${humanScore} lost: ${pcScore}`;
            }
        case 'Paper':
            if(_Pc == 'Scissors'){
                pcScore++;
                return alert(`YOU LOST...`),  scoreText.textContent = `Won: ${humanScore} lost: ${pcScore}`;
            } 
            else if(_Pc == 'Rock'){
                humanScore++;
                return alert(`YOU WON!`), scoreText.textContent = `Won: ${humanScore} lost: ${pcScore}`;
            }
            else{
                return alert(`A TIE`), scoreText.textContent = `Won: ${humanScore} lost: ${pcScore}`;
            }

        case 'Scissors':
            if(_Pc == 'Rock'){
                pcScore++;
                return alert(`YOU LOST...`), scoreText.textContent = `Won: ${humanScore} lost: ${pcScore}`
            } 
            else if(_Pc == 'Paper'){
                humanScore++;
                return alert(`YOU WON!`),  scoreText.textContent = `Won: ${humanScore} lost: ${pcScore}`;
               
            }
            else{
                return alert(`A TIE`),  scoreText.textContent = `Won: ${humanScore} lost: ${pcScore}`;
            }
    }
    return 0;
}
function display(player , pc){
    let _p1 = document.querySelector("#p1");
    let _pc = document.querySelector("#pc");

    
    if(player == "Rock")
    _p1.src = "imgs/rck.png";
    if(player == "Paper")
        _p1.src = "imgs/paper.png";
    if(player == "Scissors")
        _p1.src = "imgs/scissers.png";

    if(pc == "Rock")
        _pc.src = "imgs/rck.png";
    if(pc == "Paper")
        _pc.src = "imgs/paper.png";
    if(pc == "Scissors")
        _pc.src = "imgs/scissers.png";
}

/*
while((humanScore < 5) && (pcScore < 5)){
    console.log(`Round ${round}`);
    const player = getUserChoice();
    const pc = getComputerChoice();
    match(player,pc);
    alert(`Score: player| ${humanScore} | ${pcScore} |Pc`);
    console.log(`Score: player| ${humanScore} | ${pcScore} |Pc`);
    round++;
}
if(humanScore == 5){alert("Good Job You Won!")}
if(pcScore == 5){alert("LOSER...Better luck next time NERD")}
*/
userChoice.forEach(button => {
    button.addEventListener("click", getUserChoice);
});

