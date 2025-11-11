let userScore = 0
let computerScore = 0

const choices = document.querySelectorAll(".choice")

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        
        const choiceId = choice.getAttribute('id')
        console.log(choiceId);
        
        console.log("choice was clicked");
        
    })
    
})