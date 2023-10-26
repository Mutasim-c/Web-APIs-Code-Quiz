var start = document.getElementById("start");
var question = document.getElementById("question");

question.style.display = "none";//sets questions to non visible until start is pressed

start.addEventListener("click", function() {
    start.style.display = "none";
    question.style.display = "block";
    setTime();
})//when start  button is clicked it hides it and shows the first question