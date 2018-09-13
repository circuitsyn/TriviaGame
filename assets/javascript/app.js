//~~*~~*~~ Psuedo Code ~~*~~*~~

var gameVariables = {
    correct: 0,
    incorrect: 0,
    missed: 0,
    timeLeft: 0,
    endImage: '<img class="images" src="../../assets/images/End.gif" alt="End of Game">',
    //method to push and track time left to make a choice
    timer: function (){
        
        action = $('#time').html('Time Remaining: ' + x + ' Seconds!');
        },    
    
    //method to clear div's
    clearDivs: function(){
        $('#question').empty();
        $('#choiceA').empty();
        $('#choiceB').empty();
        $('#choiceC').empty();
        $('#choiceD').empty();
        $('#time').empty();
    },
    
    //Method to push question and choices from array
    pushQs: function(){
        $('#question').append(gamePlayArray[i].question);
        $('#choiceA').append(gamePlayArray[i].choice1);
        $('#choiceB').append(gamePlayArray[i].choice2);
        $('#choiceC').append(gamePlayArray[i].choice3);
        $('#choiceD').append(gamePlayArray[i].choice4);
    },

    //Push wrong response screen
    pushWrong: function(){
        $('#question').append(gamePlayArray[i].wrongAnswer);
        $('#choiceA').append("Time Left: " + gameVariables.timeLeft);
        $('#choiceB').append(gamePlayArray[i].gif);
    },

    //Push correct response screen
    pushCorrect: function(){
        $('#question').append(gamePlayArray[i].rightAnswer);
        $('#choiceA').append("Time Left: " + gameVariables.timeLeft)
        $('#choiceB').append(gamePlayArray[i].gif);
        
    },

    pushResults: function() {
        $('#question').append("Number Correct: " + gameVariables.correct);
        $('#choiceA').append("Number Incorrect: " + gameVariables.incorrect);
        $('#choiceB').append("Number Unanswered: " + gameVariables.missed);
        $('#choiceC').append(gameVariables.endImage);
        
    },
        
    };



//~~*~~*~~ Question Array Variables ~~*~~*~~

let gamePlayArray = [
    sonic = {
        question: 'Name a famous SEGA character that is ultra fast, was a flagship for the system and has over 100 titles to date!',
        choice1: '<button type="button" class="btn btn-outline-dark"> A. Purple Durple </button>',
        choiceInput1: 'A. Purple Durple',
        choice2: '<button type="button" class="btn btn-outline-dark"> B. Buzby </button>',
        choiceInput2: 'B. Buzby',
        choice3: '<button type="button" class="btn btn-outline-dark"> C. Sonic </button>',
        choiceInput3: 'C. Sonic',
        choice4: '<button type="button" class="btn btn-outline-dark"> D. Tails </button>',
        choiceInput4: 'D. Tails',
        rightAnswer: 'You got it right! Well done. The answer is Sonic!',
        wrongAnswer: 'You got it wrong! The correct answer is Sonic! You gotta be faster next time..!',
        gif: '<img class="images" src="../../assets/images/Sonic.gif" alt="Sonic The Hedgehog">',
        audio: '',
        answer: 'C. Sonic',
        clicked: false,
        
    },

    mario = {
        question: 'Name a famous Nintendo Character that is from a famous 2d side scoller and is always trying to rescue a princess!',
        choice1: '<button type="button" class="btn btn-outline-dark"> A. Mario </button>',
        choiceInput1: 'A. Mario',
        choice2: '<button type="button" class="btn btn-outline-dark"> B. Donkey Kong </button>',
        choiceInput2: 'B. Donkey Kong',
        choice3: '<button type="button" class="btn btn-outline-dark"> C. Spider-man </button>',
        choiceInput3: 'C. Spider-man',
        choice4: '<button type="button" class="btn btn-outline-dark"> D. The Terminator </button>',
        choiceInput4: 'D. The Terminator',
        rightAnswer: 'You got it right! Well done. The answer is Mario!',
        wrongAnswer: 'You got it wrong! The correct answer is Mario! You gott abe faster next time..!',
        gif: '<img class="images" src="../../assets/images/Mario.gif" alt="Mario">',
        audio: '',
        answer: 'A. Mario',
        clicked: false,
    }

];

// example calls


$('#startbtn').click(function(){
    $('#startbtn').css({"display":"none"});
    for (i = 0; i < gamePlayArray.length; i++) {
        //Clearing out Divs as precaution each time

        gameVariables.clearDivs();
        console.log(i);
        //push attribute section
        
        //push question details
        gameVariables.pushQs();
        
        
        //timer countdown
        for (x=30; x>0 ; x--){
            setTimeout((gameVariables.timer), 1000);
            console.log(x);
        }
        
        
        
        
        //Clickable Button Section
        $('#choiceA').click(function(i){
            gamePlayArray.clicked = true;
            if (gamePlayArray[i].choiceInput1 == gamePlayArray[i].answer) {
                gameVariables.correct++;
                gameVariables.clearDivs();
                setTimeout(gameVariables.pushCorrect,3000);
            }
            else {
                gameVariables.incorrect++;
                gameVariables.clearDivs();
                setTimeout(gameVariables.pushWrong,3000);
                
            }
        });

        $('#choiceB').click(function(i){
            gamePlayArray.clicked = true;
            if (gamePlayArray[i].choiceInput2 == gamePlayArray[i].answer) {
                gameVariables.correct++;
                gameVariables.clearDivs();
                setTimeout(gameVariables.pushCorrect,3000);
            }
            else {
                gameVariables.incorrect++;
                gameVariables.clearDivs();
                setTimeout(gameVariables.pushWrong,3000);
            }
        });

        $('#choiceC').click(function(i){
            gamePlayArray.clicked = true;
            if (gamePlayArray[i].choiceInput3 == gamePlayArray[i].answer) {
                gameVariables.correct++;
                gameVariables.clearDivs();
                setTimeout(gameVariables.pushCorrect,3000);
                
            }
            else {
                gameVariables.incorrect++;
                gameVariables.clearDivs();
                setTimeout(gameVariables.pushWrong,3000);
            }
        });

        $('#choiceD').click(function(i){
            gamePlayArray.clicked = true;
            gameVariables.correct++;
            
            if (gamePlayArray[i].choiceInput4 == gamePlayArray[i].answer) {
                gameVariables.correct++;
                gameVariables.clearDivs();
                setTimeout(gameVariables.pushCorrect,3000);
            }
            else {
                gameVariables.incorrect++;
                gameVariables.clearDivs();
                setTimeout(gameVariables.pushWrong,3000);
            }
            
        });
    
        //create check for end of time or buttons clicked
        if ((timer === 0) || (clicked == true)) {
            
        }
        
        //question to reshow the the start button should the array finish after all is done
        if ((gameVariables.correct + gameVariables.incorrect + gameVariables.missed) ==  (gamePlayArray.length-1)) {
            gameVariables.clearDivs();
            //brings start button back upon completion
            $('#startbtn').css({"display":"block"});
        }
        
    });
    
    
    
// });





