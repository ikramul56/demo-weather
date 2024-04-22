let userScore = 0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScr = document.querySelector(".user");
const compScr = document.querySelector(".comp");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice =choice.getAttribute("id");
        console.log("user choice=", userChoice);
        
        playGame(userChoice);

    });
});

const drawGame = () =>{
    msg.innerText = "The game was Draw";
    msg.style.backgroundColor = "black";
}

const compChoice = ()=>{
    const option = ["rock", "paper", "scissors"];
    const optionIdx = Math.floor(Math.random() * 3);
    return  option[optionIdx];
}

const showWinner =(userWin)=>{
    if(userWin){
        userScore++;
        userScr.innerText=userScore;
        msg.innerText = "You Win."
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScr.innerText=compScore;
        msg.innerText = "Computer Win."
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) =>{
    const pcChoice = compChoice();
    console.log("computer choice=", pcChoice);
    if(pcChoice === userChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = pcChoice === "paper"? false : true;
        }
        else if(userChoice === "paper"){
            userWin = pcChoice === "scissors" ? false : true;
        }
        else{
            userWin = pcChoice === "rock"? false: true;
        }
        showWinner(userWin);
    }

};

