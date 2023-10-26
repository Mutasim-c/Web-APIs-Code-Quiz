var start = document.getElementById("start");
var question = document.getElementById("question");
var card =  document.querySelector(".cards")

var points = 0;

var timeEl = document.querySelector(".time");
var secondsLeft = 30;
var pointsEl = document.getElementById("points");

var nameInput = document.querySelector("#name");
var userNameSpan = document.querySelector("#user-name");
var userPointsSpan = document.querySelector("#user-points");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");//get all the info for the card such as the input and display areas for the points and name it will store

renderLastRegistered();

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}//message it will display when the user stores there name and points

function renderLastRegistered() {
    // TODO: Retrieve the last email and password and render it to the page
    var localname = localStorage.getItem("name");
    var localPoints = localStorage.getItem("points");
    if (!localname || !localPoints) {
      return;
    }
    userNameSpan.textContent = localname;
    userPointsSpan.textContent = localPoints;
}//renders the last name and points the user input to the screen

signUpButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    var name = document.querySelector("#name").value;
    if (name === "") {
      displayMessage("error", "Email cannot be blank");
    }else {
      displayMessage("success", "Registered successfully");
  
    localStorage.setItem("name",name );
    localStorage.setItem("points", points);
    renderLastRegistered();
  
    }
  });//when the user signs up it will check they input a name then store in local and output to page


function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    timeEl.textContent = secondsLeft + " seconds left";

    secondsLeft--;

    if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      timeEl.textContent = ""
      question.style.display = "none";
      card.style.display = "block";
      pointsEl.textContent = points;//stops displaying questions and displays cards for anme and points to be stored

      // Calls function to create and append image
    }

  }, 1000);
}

start.addEventListener("click", function() {
    start.style.display = "none";
    //question.style.display = "block";
    setTime();
    newQuestion();
})//when start button clicked questions and timer show up 

var titles = ["Which of the following methods is used to access HTML elements using Javascript?","Which of these are used to declare a variable" , "Who uses console.log" ,"what is and if statement used for?" ,"What does JSON stand for?"];
var answers1 = ["getElementById()","var" ,"developer" , "looping through lines of code" , "Jelly Starberry Orange Nectarine" ];
var answers2 = ["getElementByClassName()","declare" ,"user" , "data type sued for storing lists" , "Java Script On Now" ];
var answers3 = ["Both A and B","let" ,"Both A and B" , "shows what data type a variable is" , "Java Script Object Notation" ];
var answers4 = ["None of the Above","None of the above" ,"None of the above" , "None of the above" , "None of the above" ];
var rightAnswer = ["3", "1", "1", "4", "3"]//all the questions and answers stored in arrays

var title = document.getElementById("titles")
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");//get the html for where the question need to go

var questionOn = 0;//tracks what question were currently on

function check(questionNum){
    if(questionNum == rightAnswer[questionOn]){
        points ++;
        //console.log("corret");
    }else{
        secondsLeft -= 5;
        //console.log("wrong");
    };
    questionOn ++;
    if(questionOn == 5){
        secondsLeft = 0;
    }
}//checks if they answered the right qustion if not it will deduct 5 seconds other wise add a point and if its the last question it will go to store the points and name
function newQuestion(){
    title.textContent = titles[questionOn]
    answer1.textContent = answers1[questionOn];
    answer2.textContent = answers2[questionOn];
    answer3.textContent = answers3[questionOn];
    answer4.textContent = answers4[questionOn];
}//displays nex question
answer1.addEventListener("click", function(){
    var questionNum = 1
    check(questionNum);
    newQuestion();

})

answer2.addEventListener("click", function(){
    var questionNum = 2
    check(questionNum);
    
    newQuestion();

})

answer3.addEventListener("click", function(){
    var questionNum = 3
    check(questionNum);
    
    newQuestion();

})

answer4.addEventListener("click", function(){
    var questionNum = 4
    check(questionNum);
    
    newQuestion();

})//event listener on each answer to check if it right and go to next question