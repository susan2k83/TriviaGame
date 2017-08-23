// You'll create a trivia form with multiple choice or true/false options (your choice).

// When the start button is clicked  
var counter = 90
$("#startCounter").on("click", function(){
// new page/box/triviaQuestions opens showing trivia qeustions
$("#startCounter").hide();
  setInterval(function() {
    counter--;
    if (counter >=0){
      $(".timeRemaining").html();
    }
    if (counter === 0) {
      clearInterval(counter);
    } 
   }, 1000);
  
  });

// a new page loads ( how is this done? Do I need a link to a new html page? or, 'hide' the content?

// and the counter will start ticking down

// user sees "Time remaining: " in seconds

// to insert reslts into .html : see below

// document.getElementById("start").innerHTML = numbers for JS

// Set time for 1 to 2 minutes

//There are four questions

 // Each question has four answer choices

// User can only choose one question



// As the counter is counting down, the user will be answering trivia questions
// When the counter reaches 0...

// //A new  page will reveal the number of questions that players answer correctly, incorrectly, and unaswered



// Calculate the number of correct answers

// Calculate the number of incorrect answers

// calculate the number of unaswered answers

// user can only pick one answer 

