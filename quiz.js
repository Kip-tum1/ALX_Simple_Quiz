function checkAnswer (){
    let correctAnswer  = "4";
    let quiz = document.querySelector("quiz");
    
    let userAnswer = quiz.value;

    if(userAnswer === correctAnswer){
        document.getElementById("feedback").textContent = "Correct! Well done."        
    }
    else{
        document.getElementById("feedback").textContent = "That's incorrect. Try again!"

    }

    let button = document.getElementById("submit-answer")
    button.addEventListener("click", function(checkAnswer){

    })
}