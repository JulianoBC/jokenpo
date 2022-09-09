let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }

// similar to convertcase but just takes lowercase and replaces with titlecase
function convertToWord(letter) {
    if (letter === "r") return "Pedra";
    if (letter === "p") return "Papel";
    return "Tesoura";
}

function win(a, b) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = 'user'.fontsize(3).sup();
    const smallCompWord = 'comp'.fontsize(3).sup();
    result_p.innerHTML = `<p>${convertToWord(a)}${smallUserWord} ganha de ${convertToWord(b)}${smallCompWord} . Você ganhou...!🔥</p>`
    document.getElementById(a).classList.add('green-back')
    setTimeout(function(){document.getElementById(a).classList.remove('green-back')}, 1000);
    
}

function lose(a, b) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `<p>${convertToWord(a)}${smallUserWord} perde para ${convertToWord(b)}${smallCompWord} . Você perdeu...!💩</p>`
    document.getElementById(a).classList.add('red-back')
    setTimeout(function(){document.getElementById(a).classList.remove('red-back')}, 1000)

}

function draw(a, b) {
	const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `<p>${convertToWord(a)}${smallUserWord} empata com ${convertToWord(b)}${smallCompWord} . Você empatou...!🍌</p>`
    document.getElementById(a).classList.add('draw-back')
    setTimeout(function(){document.getElementById(a).classList.remove('draw-back')}, 1000)

}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'pr':
        case 'rs':
        case 'sp':
            win(userChoice , computerChoice);
            console.log("user wins");
            break;
        case 'rp':
        case 'sr':
        case 'ps':
            lose(userChoice , computerChoice);
            console.log("computer wins");
            break;   
        case 'rr':
        case 'ss':
        case 'pp':
            draw(userChoice , computerChoice);
            console.log("DRAW!");
            break;    
    }         
}

function main() {
    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click', () => game('p'));
    scissors_div.addEventListener('click', () => game('s'));
}
main ();