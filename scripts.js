var spans = document.querySelectorAll(".text");

        const computerChoiceDisplay = document.getElementById("computerchoice")
        const userChoiceDisplay = document.getElementById("userchoice")
        const result = document.getElementById("result")
        const possibleChoices = document.querySelectorAll("button")
        var userChoice
        var computerChoice
        possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click",(e)=>{
            userChoice = e.target.id
            userChoiceDisplay.innerHTML = userChoice
            showSpans()
            generatecomputerchoice()
            generateresult()

        }))

        
        function showSpans() {
            spans.forEach(span => {
                span.style.display = "inline";
            });
        }
        
        function generatecomputerchoice(){
            var randomNumber = Math.floor(Math.random()*possibleChoices.length);
            if (randomNumber === 0){
                computerChoice = "rock";
            }
            if (randomNumber === 1){
                computerChoice = "paper";
            } 
            if (randomNumber === 2){
                computerChoice = "scissors";
            }
            computerChoiceDisplay.innerHTML = computerChoice;
        }
        function generateresult(){
            if(computerChoice === userChoice){
                result.innerHTML = "It's a draw"
            }
            if(computerChoice === "rock" && userChoice === "paper"){
                result.innerHTML = "You won!"
            }
            if(computerChoice === "rock" && userChoice === "scissors"){
                result.innerHTML = "You lost!"
            }
            if(computerChoice === "paper" && userChoice === "rock"){
                result.innerHTML = "You lost!"
            }
            if(computerChoice === "paper" && userChoice === "scissors"){
                result.innerHTML = "You won!"
            }
            if(computerChoice === "scissors" && userChoice === "paper"){
                result.innerHTML = "You lost!"
            }
            if(computerChoice === "scissors" && userChoice === "rock"){
                result.innerHTML = "You won!"
            }
        
        }