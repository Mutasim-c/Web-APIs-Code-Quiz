var start = document.getElementById("start");
var question = document.getElementById("question");

question.style.display = "none";//sets questions to non visible until start is pressed
var points = 0;

start.addEventListener("click", function() {
    start.style.display = "none";
    question.style.display = "block";
    setTime();
})//when start  button is clicked it hides it and shows the first question



var titles = ["","question2" , "question 3" ,"question 4" ,"question 5"];
var answers1 = ["","answer1.2" ,"answer1.3" , "answer1.4" , "answer1.5" ];
var answers2 = ["","answer2.2" ,"answer2.3" , "answer2.4" , "answer2.5" ];
var answers3 = ["","answer3.2" ,"answer3.3" , "answer3.4" , "answer3.5" ];
var answers4 = ["","answer4.2" ,"answer4.3" , "answer4.4" , "answer4.5" ];
var rightAnswer = ["2", "3", "4", "2", "1"]

var title = document.getElementById("titles")
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

var questionOn = 0;
answer1.addEventListener("click", function(){
    var questionNum = 1
    if(questionNum == rightAnswer[questionOn]){
        points ++;
        console.log("corret");
    }else{
        secondsLeft -= 5;
        console.log("wrong");
    };
    questionOn ++;
    if(questionOn == 5){
        secondsLeft = 0;
    }
    
    title.textContent = titles[questionOn]
    answer1.textContent = answers1[questionOn];
    answer2.textContent = answers2[questionOn];
    answer3.textContent = answers3[questionOn];
    answer4.textContent = answers4[questionOn];

})

answer2.addEventListener("click", function(){
    var questionNum = 2
    if(questionNum == rightAnswer[questionOn]){
        points ++;
        console.log("corret");
    }else{
        secondsLeft -= 5;
        console.log("wrong");
    };
    questionOn ++;
    if(questionOn == 5){
        secondsLeft = 0;
    }
    
    title.textContent = titles[questionOn]
    answer1.textContent = answers1[questionOn];
    answer2.textContent = answers2[questionOn];
    answer3.textContent = answers3[questionOn];
    answer4.textContent = answers4[questionOn];

})

answer3.addEventListener("click", function(){
    var questionNum = 3
    if(questionNum == rightAnswer[questionOn]){
        points ++;
        console.log("corret");
    }else{
        secondsLeft -= 5;
        console.log("wrong");
    };
    questionOn ++;
    if(questionOn == 5){
        secondsLeft = 0;
    }
    
    title.textContent = titles[questionOn]
    answer1.textContent = answers1[questionOn];
    answer2.textContent = answers2[questionOn];
    answer3.textContent = answers3[questionOn];
    answer4.textContent = answers4[questionOn];

})

answer4.addEventListener("click", function(){
    var questionNum = 4
    if(questionNum == rightAnswer[questionOn]){
        points ++;
        console.log("corret");
    }else{
        secondsLeft -= 5;
        console.log("wrong");
    };
    questionOn ++;
    if(questionOn == 5){
        secondsLeft = 0;
    }
    
    title.textContent = titles[questionOn]
    answer1.textContent = answers1[questionOn];
    answer2.textContent = answers2[questionOn];
    answer3.textContent = answers3[questionOn];
    answer4.textContent = answers4[questionOn];

})