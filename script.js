console.log("We are LIVE!")
function getComputerChoice(){
    let choice = Math.floor(1+Math.random()*3);
    let answer;
    switch (choice){
        case 1:
            answer = "rock";
        break;
        case 2:
            answer = "paper";
        break;
        case 3:
            answer = "scissors";
        break;
    }
    return answer;
}
function getUserChoice(){
    let userChoice = prompt("Choose: Rock | Paper | Scissors");
    userChoice.toLocaleLowerCase;
    return userChoice;
}

function match(player , PC){
    switch(player){
        case 'rock':
            if(PC == 'paper'){
                pcScore++;
                return alert(`YOU LOST...`)
            } 
            else if(PC == 'scissors'){
                humanScore++;
                return alert(`YOU WON!`)
            }
            else
                return alert(`A TIE`)
        break;
        case 'paper':
            if(PC == 'scissors'){
                pcScore++;
                return alert(`YOU LOST...`)
            } 
            else if(PC == 'rock'){
                humanScore++;
                return alert(`YOU WON!`)
            }
            else
                return alert(`A TIE}`)
        break;
        case 'scissors':
            if(PC == 'rock'){
                pcScore++;
                return alert(`YOU LOST...`)
            } 
            else if(PC == 'paper'){
                humanScore++;
                return alert(`YOU WON!`)
            }
            else
                return alert(`A TIE`)
        break;
    }
    return 0;
}

let humanScore = 0;
let pcScore = 0;
let round = 1;
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

