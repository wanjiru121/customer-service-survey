function Question(text,choices) {
    this.text = text;
    this.choices = choices;
    // this.answer = answer;
}


Question.prototype.pickedAnswer = function(choice) {
    return choice = this.choices;
}