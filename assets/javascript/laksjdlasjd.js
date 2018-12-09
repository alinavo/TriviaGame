
$(document).ready(function () {
  $("#remaining-time").hide();
  $(".answers").hide();
  $("#start").on("click", startGame);
  // $(document).on('click' , '.option', guessChecker);
  // $("#firstAnswer").hide(); 
});

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var currentSet = 0;
var timer = 21;
var timerTwo = 5;
var timerOn = false;
var timerId = "";
var timerStart = "";


var beyonce = [{
  question: "What year was Beyonce born?",
  option1: "1981",
  option2: "1980",
  option3: "1982",
  option4: "1985",
  answer: "1981",
  img: "assets/images/BeyonceBaby.gif",

},
{
  question: "Where was Beyonce born?",
  option1: "Dallas, Tx",
  option2: "Houston, Tx",
  option3: "Atlanta, Ga",
  option4: "New York, Ny",
  answer: "Houston, Tx",
  img: "",
},
{
  question: "When did Beyonce go solo?",
  option1: "2002",
  option2: "2003",
  option3: "2006",
  option4: "2005",
  answer: "2003",
  img: "...img",
},
{
  question: "What's the name of Beyonce's second solo album?",
  option1: "Dangerously in Love",
  option2: "Formation",
  option3: "Beyonce",
  option4: "Sasha Fierce",
  answer: "Beyonce",
  img: "...img",
},
{
  question: "How many SOLO albums has Beyonce released?",
  option1: "3",
  option2: "6",
  option3: "5",
  option4: "7",
  answer: "7",
  img: "...img",
},]


function startGame() {
  currentSet = 0;
  correctAnswers = 0;
  incorrectAnswers = 0;
  unanswered = 0;
  // clearInterval(timerId);
  // $('#game').show();
  // $('#results').html('');
  // $('#timer').text(timer);
  // $('#timerTwo').text(timerTwo);
  $('#start').hide();

  // $('#remaining-time').show();
  nextQuestion();
};
// need to stu[]
function nextQuestion() {
  $(".answers").show();
  clearInterval(timerId);
  timer = 21;
  //  $('#timer').removeClass('last-seconds');
  // $("#results").hide();
  // $("#timer").show();

  newScreen();

  //    var countDown = setInterval (timesUp, 1000);
  // timesUp();
  // function timesUp(){
  //   timer --;

  //   $("#timer").text(timer);
  //   if (timer === 0){
  //     clearInterval(countDown);
  //     i++;
  //     newScreen();
  //     unanswered++;

  //   }
  // }

};
function yayYou() {
  // timer = 5;
  // clearInterval(countDown);
  $("#myQuestions").hide();
  $(".answers").hide();
  $("#remaining-time").hide();
  $("#answersShown").text("Yay you got it! The correct answer was " + (beyonce[i].answer));
  $("#image").attr("src", beyonce[i].img);
  // if (timer <== 0){
  newScreen();
}
function booYou() {
  // timer = 5;
  // clearInterval(countDown);
  $("#myQuestions").hide();
  $(".answers").hide();
  $("#remaining-time").hide();
  $("#answersShown").text("So sorry the correct answer was " + (beyonce[i].answer));
  $("#image").attr("src", beyonce[i].img);
  // if (timer <== 0){
  newScreen();
}

var countDown = setInterval(timesUp, 1000);


function timesUp() {
  timer--;

  $("#timer").text(timer);
  if (timer === 0) {
    clearInterval(countDown);
    i++;
    booYou();
    unanswered++;

  }
}
  function newScreen() {
    timer = 21;
    timer--;
    $("#timer").text(timer);
    // timesUp();
    // startInterval(reStart);

    if (i < beyonce.length) {
      $("#remaining-time").show();
      $("#myQuestions").text(beyonce[i].question);
      $(".answer1").text(beyonce[i].option1);
      $(".answer2").text(beyonce[i].option2);
      $(".answer3").text(beyonce[i].option3);
      $(".answer4").text(beyonce[i].option4);
      // $("#firstAnswer").
      // if (timer === 0){
      //   clearInterval(timerId);
      //   i++;
      //   newScreen();
      //   unanswered
      // }
    }

    if (i === beyonce.length) {

      $('#results')
        .html('<h3>Thank you for playing!</h3>' +
          '<p>Correct: ' + correctAnswers + '</p>' +
          '<p>Incorrect: ' + incorrectAnswers + '</p>' +
          '<p>Unaswered: ' + unanswered + '</p>' +
          '<p>Please play again!</p>');
      $("#myQuestions").hide();
      $(".answers").hide();
      $("#remaining-time").hide();
    }
  }
  // var reStart = startInterval ( timesUp, 1000);  
  var countDown = setInterval(timesUp, 1000);


  // function timesUp() {
  //   timer--;

  //   $("#timer").text(timer);
  //   if (timer === 0) {
  //     clearInterval(countDown);
  //     i++;
  //     booYou();
  //     unanswered++;

  //   }
  // }








  var i = 0;
  $(document).on("click", ".answers", function () {
    timer = 21;
    if ($(this).text() === beyonce[i].answer) {
      // alert("test");
      timer = 21;
      console.log(this)
      // i++;
      correctAnswers++;
      i++;
      yayYou();
      // newScreen();

    } else {
      incorrectAnswers++;
      console.log(this)
      timer = 21;
      i++;
      booYou();
      newScreen();

    }

  })
  //   function timerRunning(){
  //     if(timer > -1 && currentSet < Object.keys(beyonce.questions).length){
  //       $('#timer').text(timer);
  //       timer--;
  //     }
  //     else if(timer === -1){
  //       unanswered++;
  //       result = false;
  //       clearInterval(timerId);
  //       resultId = setTimeout(guessResult, 1000);
  //       $("#timer").hide(timer);
  //       $("#remaining-time").hide();
  //       $("#question").hide();
  //       $('#options').hide();
  //       // alert("you got it");
  //       $("#results").html("Out of time! The answer was " + Object.values(beyonce.answers)[currentSet] );
  //       nextQuestion();

  //       // $("#results").html('<h3>Out of time! The answer was '+ Object.values(beyonce.answers)[currentSet] +'</h3>');
  //     }
  //     // if all the questions have been shown end the game, show results
  //     else if(currentSet === Object.keys(beyonce.questions).length){

  // adds results of game (correct, incorrect, unanswered) to the page
  // if (i = beyonce.length){

  //   $('#results')
  //     .html('<h3>Thank you for playing!</h3>'+
  //     '<p>Correct: '+ correctAnswers +'</p>'+
  //     '<p>Incorrect: '+ incorrectAnswers +'</p>'+
  //     '<p>Unaswered: '+ unanswered +'</p>'+
  //     '<p>Please play again!</p>');
  //   }
  //       // hide game sction
  //       $('#game').hide();

  //       // show start button to begin a new game
  //       $('#start').show();
  //     }

  //   };
  //  var currentAnswer = Object.values(beyonce.answers)[currentSet];
  //   function guessChecker() {
  //     // var resultId;

  //     if($(this).text() === currentAnswer){
  //       $(this).addClass('btn-success').removeClass('btn-info');
  //       correctAnswers++;
  //       clearInterval(timerId);
  //       resultId = setTimeout(guessResult, 1000);
  //       thankYouNext();

  //     }

  //     // else the user picked the wrong option, increment incorrect
  //     else if($(this).text() !== currentAnswer) {
  //       // turn button clicked red for incorrect
  //       $(this).addClass('btn-danger').removeClass('btn-info');

  //       incorrectAnswers++;
  //       clearInterval(timerId);
  //       resultId = setTimeout(guessResult, 1000);
  //       // $('#results').html('<h3>Better luck next time! '+ currentAnswer +'</h3>');
  //       $("#timer").hide(timer);
  //       $("#remaining-time").hide();
  //       $("#question").hide();
  //       $('#options').hide();
  //       // alert("you got it");
  //       $("#results").html("Maybe next time...The answer was " + currentAnswer );
  //       nextQuestion();
  //     }


  // };


  function guessResult() {
    currentSet++;
    $('.option').remove();
    $('#results h3').remove();
    nextQuestion();
  }