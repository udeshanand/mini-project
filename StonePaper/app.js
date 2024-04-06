let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const genCompChoice = () =>{
   
     const option=["rock","paper","scissors"];
     const randIdx= Math.floor(Math.random() * 3);
     return option[randIdx];
}
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const showWinner = (userwin , userchoice,compchoice) =>{
    if(userwin){
        userScore++;
        userScorePara.innerText=userScore;
       msg.innerText = `You Win! Your  ${userchoice} beats ${compchoice}`;
       msg.computedStyleMap.backgroundColor="green";
    } else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Lose ");
        msg.innerText = `You lose! Computer ${compchoice} beats Your ${userchoice}`;
        msg.computedStyleMap.backgroundColor="red";
    }
}
const drawGame =() =>{
    console.log("Game was Deaw.");
    msg.innerText = "Game Was Drow.Play Again"
}
const playGame = (userchoice) =>{
   console.log(userchoice)
   //
   const compchoice=genCompChoice();
   console.log(compchoice);

   if(userchoice == compchoice){
     drawGame();
   } else {
    let userwin=true;
    if(userchoice === "rock" ) {
       userwin = compchoice === "paper" ? false : true;
    } else if(userchoice === "paper") {
       userwin = compchoice === "scissors" ? false : true;
     } else{
        userwin = compchoice === "rock" ? false : true;
     }
     showWinner(userwin , userchoice,compchoice);
   }

};
choices.forEach((choice)=>{   
    choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");    
    playGame(userchoice);
  });
});