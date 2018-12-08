

//questions that make up trivia game
//question in string
//answerList var for each one in array
//answer is integer 
//NOT SURE IF INTEGER SHOULD BE INDEX NUMBER OR NOT
var triviaQuestions = [{
    //book one
    question: "Which two houses does the Sorting Hat have difficulty putting Harry in?",
    answerList: ["Hufflepuff & Gryffindor", "Gryffindor & Slytherin", "Ravenclaw & Hufflepuff", "Gryffindor & Ravenclaw"],
    answer: 2
}, {
    //book two
    question: "Which Hufflepuff student does the serpent stare down during the duel between Malfoy and Harry?",
    answerList: ["Justin Finch-Fletchley", "Hannah Abbott", "Susan Bones", "Zacharias Smith"],
    answer: 1
}, {
    //book three
    question: "Which one of the Marauder’s is Sirius Black?",
    answerList: ["Moony", "Wormtail", "Padfoot", "Prongs"],
    answer: 3
    }, {
    //book four
    question: "Who put Harry’s name in the Goblet of Fire?",
    answerList: ["Igor Kararov", "Barty Crouch Jr.", "Madeye Moody", "Severus Snape"],
    answer: 2
}, {
    //book five
    question: "What are the creatures Harry and Luna can see but no other students?",
    answerList: ["Dementors", "Blast-Ended Skrewts", "Nargles", "Thestrals"],
    answer: 4
}, {
    //book six
    question: "What scent does Hermione NOT describe when sniffing the love potion <i>Amortentia</i> ?",
    answerList: ["Freshly mown grass", "Spearmint toothpaste", "Roses", "Parchment"],
    answer: 3
}, {
    //book seven
    question: "Which magical object is NOT one of the three Deathly Hallows",
    answerList: ["Time-Turner", "Elder Wand", "Invisibility Cloak", "Resurrection Stone"],
    answer: 1
}, {
    //extra Q
    question: "Who was Headmaster of Hogwarts before Albus Dumbledore",
    answerList: ["Cornelius Fudge", "Rufus Scrimgeour", "Phineas Nigellus", "Armando Dippet"],
    answer: 4
}, {
    //extra Q
    question: "Which ghost died the first time the Chamber of Secrets was opened?",
    answerList: ["Bloody Baron", "Sir Nicholas", "Moaning Myrtle", "Helena Hufflepuff"],
    answer: 3
}, {
    //extra Q
    question: "How many children do Molly and Arthur Weasley have?",
    answerList: ["5", "6", "7", "8"],
    answer: 3
}];


//array of gifs for answers, each corresponds to question number 
//want gif to show up after answer is presented
var gifArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];


var currentQ; //Question user is currently on
var correct; //correct answer
var incorrect;
var unanswered;
var seconds;
var time;
var answered;
var userSelect;

//alerts (or prints) to the user when question is right or wrong
// alerts (or prints) right, wrong, out of time,
var messages = {


   correct: "Yes! That is right!",

   incorrect: "No! That is wrong!",

   timeEnd: "Sorry! You're out of time!",

   finished: "Here are your results!"


//start button begins new game when clicked
$('#startBtn').on('click', function () { 
   $(this).hide();
   newGame();

});

//start over button also beings new game when clicked
$('#startOverBtn').on('click', function () {
   $(this).hide();
   newGame();
});


