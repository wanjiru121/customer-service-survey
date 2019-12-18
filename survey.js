function populate(){
    if(quiz.isEnded()){
        console.log("Your feedback is highly appreciated.")
    }

    else{
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i=0; i < choices.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];

            guess("btn" + i, choices[i]); 

        }

        showProgress();
    }
} 


function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
}

function showProgress(){

    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML ="Ouestion  " + currentQuestionNumber + " of  " + quiz.questions.length;

}


var questions = [
    // new Question("What was the reason for your visit?", ["Accomodation","Dining","Meetings","Events"],["Accomodation","Dining","Meetings","Events"]),
    new Question("How satisfied were you with our customer service and friendliness of staff?", ["Very Satisfied","Satisfied", "A bit Satisfied","Not Satisfied"]),
    new Question("How satisfied were you with the cleanliness and comfort of the rooms?", ["Very Satisfied","Satisfied", "Neutral","Not Satisfied"]),
    new Question("How do you rate the taste and quality of our hotel food?", ["Very Satisfactory","Satisfactory","Nuetral","Dissatisfactory"]),
    new Question("We provided value for your money?", ["Strongly Agree","Agree","Nuetral","Disagree"],["Strongly Agree","Agree","Nuetral","Disagree"]),
    new Question("Overall, how much were you satisfied with our services?", ["Very Satisfied","Satisfied","Somewhat Satisfied","Dissatisfied"]),
    new Question("How likely are you to visit this hotel again?", ["Very likely","Likely","Nuetral","Not Likely"],["Very likely","Likely","Neutral","Not Likely"]),
    new Question("How likely are you to recommend this hotel to your friend/colleague?",  ["Very likely","Likely","Nuetral","Not Likely"], ["Very likely","Likely","Neutral","Not Likely"])
];


var quiz = new Quiz(questions);

populate();

