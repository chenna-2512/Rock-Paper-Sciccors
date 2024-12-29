let userScore = 0;
let compScore = 0;

let userscore = document.querySelector("#user-score");
let compscore = document.querySelector("#comp-score");

let choices = document.querySelectorAll(".choice");

const gamePlay = () => {
    const select = ["rock","paper","scissor"];
    const ranidx = Math.floor(Math.random()*3);
    return select[ranidx];
};
const msg = document.querySelector("#msg1");
const drawGame = (userChoice,compChoice) => {
    console.log("game draw");
    msg.innerText = `Game was Draw, ${userChoice} equals ${compChoice} Play Again`; //"Game was Draw",user-score,""
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin==true){
        console.log("You Won!");
        msg.innerText = `You Won, ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userscore.innerText = userScore;
    }else{
        console.log("You Lose!");
        msg.innerText = `You Lose, ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compscore.innerText = compScore;
    }
};

const playGame = (userChoice) => {
    console.log("userChoice = ",userChoice);
    let compChoice = gamePlay();
    console.log("compChoice = ",compChoice);

    if(userChoice===compChoice){
        drawGame(userChoice,compChoice);
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            //paper,sciccors
            userWin = compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock,sciccor
            userWin = compChoice==="rock"?true:false;
        }else{
            //rock,paper
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
