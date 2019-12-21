function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function(){
    return this.questions.length <= this.questionIndex;
}

Quiz.prototype.guess = function(guess){
    this.questionIndex++;
}

//     if(this.getQuestionIndex().pickedAnswer(answer))  {
//         console.log(answer)
//     }
// }


