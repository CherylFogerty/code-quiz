var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

function countdown(){
    var timeLeft = 60000;

    var timeInterval = setInterval(function(){
        //YOUR CODE HERE
        //
        if(timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        }   else {
            timerEl.textContent = '';
            clearInterval(timeInterval)
            displayMessage();
        }
    }, 1000);
}



var questions = [
    {
        q: "A Callback is a function passed as an ____ to another function.", 
        a: "argument",
        choices: ["string","argument","function","question"]
    },
    {

    }
]

var questionBox= document.getElementById("questionbox")
var questionIndex=0

function displayQuestion(){
    var currentQuestion=questions[questionIndex]
    var questiontext=currentQuestion.q
    console.log(questiontext)
    questionBox.textContent=questiontext
    var choices=currentQuestion.choices
    
}
displayQuestion()

var choice1= document.querySelector("#string")
var choice2= document.querySelector("#argument")
var choice3= document.querySelector("#function")
var choice4= document.querySelector("#question")


function checkAnswer(){
    if(choice2.innerHTML=== questions[0].a){
        alert("correctanswer")
    }else
        alert("incorrect")
    

}

choice2.onclick=checkAnswer


