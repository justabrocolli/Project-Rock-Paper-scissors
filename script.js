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

//let userChoice = prompt("Choose: Rock | Paper | Scissors");
//userChoice.toLocaleLowerCase;


console.log(getComputerChoice());