

//questions that make up trivia game
//question in string
//answerList var for each one in array
//answer is INDEX 
var triviaQuestions = [{
    //book one
    question: "Which two houses does the Sorting Hat have difficulty putting Harry in?",
    answerList: ["Hufflepuff & Gryffindor", "Gryffindor & Slytherin", "Ravenclaw & Hufflepuff", "Gryffindor & Ravenclaw"],
	answer: 1
}, {
    //book two
    question: "Which Hufflepuff student does the serpent stare down during the duel between Malfoy and Harry?",
    answerList: ["Justin Finch-Fletchley", "Hannah Abbott", "Susan Bones", "Zacharias Smith"],
	answer: 0
}, {
    //book three
    question: "Which one of the Marauder’s is Sirius Black?",
    answerList: ["Moony", "Wormtail", "Padfoot", "Prongs"],
    answer: 2
}, {
    //book four
    question: "Who put Harry’s name in the Goblet of Fire?",
    answerList: ["Igor Kararov", "Barty Crouch Jr.", "Madeye Moody", "Severus Snape"],
    answer: 1
}, {
    //book five
    question: "What are the creatures Harry and Luna can see but no other students?",
    answerList: ["Dementors", "Blast-Ended Skrewts", "Nargles", "Thestrals"],
    answer: 3
}, {
    //book six
    question: "What scent does Hermione NOT describe when sniffing the love potion <i>Amortentia</i> ?",
    answerList: ["Freshly mown grass", "Spearmint toothpaste", "Roses", "Parchment"],
    answer: 2
}, {
    //book seven
    question: "Which magical object is NOT one of the three Deathly Hallows?",
    answerList: ["Time-Turner", "Elder Wand", "Invisibility Cloak", "Resurrection Stone"],
    answer: 0
}, {
    //extra Q
    question: "Who was Headmaster of Hogwarts before Albus Dumbledore?",
    answerList: ["Cornelius Fudge", "Rufus Scrimgeour", "Phineas Nigellus", "Armando Dippet"],
    answer: 3
}, {
    //extra Q
    question: "Which ghost died the first time the Chamber of Secrets was opened?",
    answerList: ["Bloody Baron", "Sir Nicholas", "Moaning Myrtle", "Helena Hufflepuff"],
    answer: 2
}, {
    //extra Q
    question: "How many children do Molly and Arthur Weasley have?",
    answerList: ["5", "6", "7", "8"],
    answer: 2
}]; 


//array of gifs for answers, each corresponds to question number 
//want gif to show up after answer is presented
var gifArray = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];


var currentQuestion; 
var correctAnswer; 
var incorrectAnswer; 
var unanswered; 
var seconds; 
var time; 
var answered; 
var userSelect;
var messages = {
	correct: "Gallopin' Goblins! That's right! ",
	incorrect: "Sorry. That is wrong. Don't cry over spilt potion!",
	endTime: "Uh oh! You ran out of time!",
	finished: "Hold your hippogriffs! Here are your results: "
}

$(document).on("click", "#startBtn", function() {
	$('#startBtn').hide();
	newGame();
  });

//needs to use document on instead of 
$(document).on("click", "#startOverBtn", function() {
	$('#startOverBtn').hide();
	newGame();
  });

function newGame(){
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
    newQuestion();
}

    
// everything should show up on question page
//all of this happens when a new questions comes onto the page
function newQuestion(){
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();
	answered = true;
	
	//sets up new questions & answerList
	$('#currentQuestion').html('Question #'+(currentQuestion+1)+' out of '+triviaQuestions.length);
	$('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.answerList').append(choices);
	}
	countdown();
	//clicking an answer will pause the time and setup answerPage
	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');
		//clears the time
		clearInterval(time);
		answerPage();
    });

}
//timer in function 
function countdown(){
	seconds = 15;
	$('#timeLeft').html("<h3>Time Remaining: " + seconds + " seconds </h3>");
	answered = true;
	//sets timer to go down
	time = setInterval(showCountdown, 1000);
}

//show the countdown of the timer
//if the seconds goes to zero, clear the timer and the page
function showCountdown(){
	seconds--;
	$('#timeLeft').html("<h3>Time Remaining: " + seconds + " seconds </h3>");
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		answerPage();
	}
}

function answerPage(){
	$('#currentQuestion').empty();
	$('.thisChoice').empty(); //Clears question page
	$('.question').empty(); 
	//right answer text is index of current question in trivia and same index of answer list -- taking the string from the array
	var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
	var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
	// $('#info').html( + infoArray[currentQuestion]);
	$('#gif').html('<img src = "assets/images/'+ gifArray[currentQuestion] +'.gif" width = "400px">');

	//checks to see correct, incorrect, or unanswered
	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$('#message').html(messages.correct); //displays correct message to answer page
	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$('#message').html(messages.incorrect); //displays incorrect message to answer page
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
		// $('#info').html( + infoArray[currentQuestion]);
	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
		answered = true;
	}
	
	if(currentQuestion == (triviaQuestions.length-1)){
		setTimeout(scoreboard, 5000)
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 5000);		
	}	
}

function scoreboard(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();

	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Want to start over?');
}
