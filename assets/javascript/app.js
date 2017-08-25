$(document).ready(function() {
    $(".slidingDiv").hide();
    // $(".slidingDiv")'.show();
    $("#endOfGame").hide();
    $("#startCounter, .show_hide").on("click", function() {

        $("#startCounter").hide();
        $(".slidingDiv").show();
        var unansweredTotal = 0;
        var incorrectTotal = 0;
        var correctAnswerTotal = 0;
        var count = 30;
        var counter = setInterval(function() {
            count--;

            $(".timeRemaining").html(count);
            console.log(counter);

            if (count === 0) {
                clearInterval(counter);
                //do tallies for correct/incorrect/unanswered

                var userChoiceForGenre = $("input[name='genre']:checked").val();
                var correctAnswerForGenre = 'liver';

                if (userChoiceForGenre === correctAnswerForGenre) {
                    correctAnswerTotal++;
                    console.log(correctAnswerTotal);
                } else if (userChoiceForGenre !== undefined && userChoiceForGenre !== correctAnswerForGenre) {
                    incorrectTotal++;
                    console.log(incorrectTotal);
                } else {
                    unansweredTotal++;
                    console.log(unansweredTotal);
                }

                var userChoiceForGenre = $("input[name='nature']:checked").val();
                var correctAnswerForGenre = 'evergreen';

                if (userChoiceForGenre === correctAnswerForGenre) {
                    correctAnswerTotal++;
                    console.log(correctAnswerTotal);

                } else if (userChoiceForGenre !== undefined && userChoiceForGenre !== correctAnswerForGenre) {
                    incorrectTotal++;
                    console.log(incorrectTotal);
                } else {
                    unansweredTotal++;
                    console.log(unansweredTotal);
                }

                var userChoiceForGenre = $("input[name='eyes']:checked").val();
                var correctAnswerForGenre = 'green';

                if (userChoiceForGenre === correctAnswerForGenre) {
                    correctAnswerTotal++;
                    console.log(correctAnswerTotal);

                } else if (userChoiceForGenre !== undefined && userChoiceForGenre !== correctAnswerForGenre) {
                    incorrectTotal++;
                    console.log(incorrectTotal);
                } else {
                    unansweredTotal++;
                    console.log(unansweredTotal);
                }

                var userChoiceForGenre = $("input[name='metal']:checked").val();
                var correctAnswerForGenre = 'aluminum';

                if (userChoiceForGenre === correctAnswerForGenre) {
                    correctAnswerTotal++;
                    console.log(correctAnswerTotal);

                } else if (userChoiceForGenre !== undefined && userChoiceForGenre !== correctAnswerForGenre) {
                    incorrectTotal++;
                    console.log(incorrectTotal);
                } else {
                    unansweredTotal++;
                    console.log(unansweredTotal);
                }
                $("#endOfGame").show();
                $(".correctAnswers").text(correctAnswerTotal);
                $(".incorretAnswers").text(incorrectTotal);
                $(".unanswered").text(unansweredTotal);

            }
        }, 1000);

    });
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