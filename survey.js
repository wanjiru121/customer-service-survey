function populate(){
    if(quiz.isEnded()){
        onceThrough();
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


function onceThrough(){
    var feedbackOverHtml = "<div id='cont'><h1>Thank You!!</h1><p>Your comments and suggestions will enable us to improve our services<br> in our endeavour to exceed your expectations during your future visits. </p></div>";
    var element = document.getElementById("quiz");
    element.innerHTML = feedbackOverHtml;
} 

function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        sendMail();
        populate();
    }

}

function showProgress(){

    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML ="Ouestion  " + currentQuestionNumber + " of  " + quiz.questions.length;

}


function sendMail() {
    var link = "mailto:rosewanjiru121@gmail.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape("Never mind")
    ;

    window.location.href = link;
}




var questions = [
    new Question("How satisfied were you with our customer service and friendliness of staff?", ["Very Satisfied","Satisfied", "A bit Satisfied","Not Satisfied"]),
    new Question("How satisfied were you with the cleanliness and comfort of the rooms?", ["Very Satisfied","Satisfied", "Neutral","Not Satisfied"]),
    new Question("How do you rate the taste and quality of our hotel food?", ["Very Satisfactory","Satisfactory","Nuetral","Dissatisfactory"]),
    new Question("How do you feel about the variety of our food?", ["Very Satisfactory", "Satisfactory", "Needs Improvement", "Poor"]),
    new Question("How much do you like our food presentation?", ["I love it", "I like it", "Nuetral", "I don't like it" ]),
    new Question("We provided value for your money?", ["Strongly Agree","Agree","Nuetral","Disagree"],["Strongly Agree","Agree","Nuetral","Disagree"]),
    new Question("Overall, how much were you satisfied with our services?", ["Very Satisfied","Satisfied","Somewhat Satisfied","Dissatisfied"]),
    new Question("How likely are you to visit this hotel again?", ["Very likely","Likely","Nuetral","Not Likely"],["Very likely","Likely","Neutral","Not Likely"]),
    new Question("How likely are you to recommend this hotel to your friend/colleague?",  ["Very likely","Likely","Nuetral","Not Likely"], ["Very likely","Likely","Neutral","Not Likely"]),
];


var quiz = new Quiz(questions);

populate();

