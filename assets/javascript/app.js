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

    pushMissed: function() {
        $('#question').append("You missed it! Let's try on the next Question!");
    }
        
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
    },

    crash = {
        question: 'What terrestrial marsupial would work through portals and spin in order to defeat the evil Dr. Neo Cortex!',
        choice1: '<button type="button" class="btn btn-outline-dark"> A. Pickle Rick </button>',
        choiceInput1: 'A. Pickle Rick',
        choice2: '<button type="button" class="btn btn-outline-dark"> B. Donkey Kong </button>',
        choiceInput2: 'B. Donkey Kong',
        choice3: '<button type="button" class="btn btn-outline-dark"> C. Crash Bandicoot </button>',
        choiceInput3: 'C. Crash Bandicoot',
        choice4: '<button type="button" class="btn btn-outline-dark"> D. Toad </button>',
        choiceInput4: 'D. Toad',
        rightAnswer: 'You got it right! Well done. The answer is Crash Bandicoot!',
        wrongAnswer: 'You got it wrong! The correct answer is Crash Bandicoot! You gott abe faster next time..!',
        gif: '<img class="images" src="../../assets/images/crashBandicoot.gif" alt="Crash Bandicoot">',
        audio: '',
        answer: 'C. Crash Bandicoot',
        clicked: false,
    },

    comixZone = {
        question: 'A video game famous for traversing the pages of graphic novels in its gameplay.',
        choice1: '<button type="button" class="btn btn-outline-dark"> A. Teenage Mutant Ninja Turtles </button>',
        choiceInput1: 'A. Teenage Mutant Ninja Turtles',
        choice2: '<button type="button" class="btn btn-outline-dark"> B. ComixZone </button>',
        choiceInput2: 'B. ComixZone',
        choice3: '<button type="button" class="btn btn-outline-dark"> C. Spider-man </button>',
        choiceInput3: 'C. Spider-man',
        choice4: '<button type="button" class="btn btn-outline-dark"> D. Paperboy </button>',
        choiceInput4: 'D. Paperboy',
        rightAnswer: 'You got it right! Well done. The answer is ComixZone!',
        wrongAnswer: 'You got it wrong! The correct answer is ComixZone! lets turn that page!',
        gif: '<img class="images" src="../../assets/images/comixZone.gif" alt="Comix Zone">',
        audio: '',
        answer: 'B. ComixZone',
        clicked: false,
    },

    earthWormJim = {
        question: 'Can you name a galaxy crusading annelid taking on the evils of the universe?',
        choice1: '<button type="button" class="btn btn-outline-dark"> A. Earthworm Jim </button>',
        choiceInput1: 'A. Earthworm Jim',
        choice2: '<button type="button" class="btn btn-outline-dark"> B. Earthworm Bob Barker </button>',
        choiceInput2: 'B. Earthworm Bob Barker',
        choice3: '<button type="button" class="btn btn-outline-dark"> Earthworm Cypher </button>',
        choiceInput3: 'C. Earthworm Cypher',
        choice4: '<button type="button" class="btn btn-outline-dark"> D. Galactic Earthworm Crusader </button>',
        choiceInput4: 'D. Galactic Earthworm Crusader',
        rightAnswer: 'You got it right! Well done. The answer is Earthworm Jim!',
        wrongAnswer: 'You got it wrong! The correct answer is Earthworm Jim! Not so groovy!',
        gif: '<img class="images" src="../../assets/images/earthwormJim.gif" alt="Earthworm Jim">',
        audio: '',
        answer: 'A. Earthworm Jim',
        clicked: false,
    },

    masterChief = {
        question: 'What famous super soldier fought the covenant and the flood just for starters while protecting the planet earth?',
        choice1: '<button type="button" class="btn btn-outline-dark"> A. Tom Clancy </button>',
        choiceInput1: 'A. Tom Clancy',
        choice2: '<button type="button" class="btn btn-outline-dark"> B. Logan </button>',
        choiceInput2: 'B. Logan',
        choice3: '<button type="button" class="btn btn-outline-dark"> C. Batman </button>',
        choiceInput3: 'C. Batman',
        choice4: '<button type="button" class="btn btn-outline-dark"> D. Master Chief </button>',
        choiceInput4: 'D. Master Chief',
        rightAnswer: 'You got it right! Well done. The answer is Master Chief!',
        wrongAnswer: 'You got it wrong! The correct answer is Master Chief! Better luck next time soldier!',
        gif: '<img class="images" src="../../assets/images/masterChief.gif" alt="Master Chief">',
        audio: '',
        answer: 'D. Master Chief',
        clicked: false,
    },

    mortalCombat = {
        question: 'Name a famous video game series that not only was a great fighting game, but was famous for its finishing moves!',
        choice1: '<button type="button" class="btn btn-outline-dark d-flex justify-content-center"> A. Street Fighter </button>',
        choiceInput1: 'A. Street Fighter',
        choice2: '<button type="button" class="btn btn-outline-dark d-flex justify-content-center"> B. Mortal Combat </button>',
        choiceInput2: 'B. Mortal Combat',
        choice3: '<button type="button" class="btn btn-outline-dark d-flex justify-content-center"> C. Marvel vs. Capcom </button>',
        choiceInput3: 'C. Marvel vs. Capcom',
        choice4: '<button type="button" class="btn btn-outline-dark d-flex justify-content-center"> D. Battle Toads </button>',
        choiceInput4: 'D. Battle Toads',
        rightAnswer: 'You got it right! Well done. The answer is Mortal Combat!',
        wrongAnswer: 'You got it wrong! The correct answer is Mortal Combat! Finish Him!',
        gif: '<img class="images" src="../../assets/images/mortalCombat.gif" alt="Mortal Combat">',
        audio: '',
        answer: 'B. Mortal Combat',
        clicked: false,
    },

];

// example calls


$('#startbtn').click(function(){
    $('#startbtn').css({"display":"none"});
    $('#startText').css({"display":"none"});
    for (i = 0; i < gamePlayArray.length; i++) {
        //Clearing out Divs as precaution each time

        gameVariables.clearDivs();
        console.log(i);
        //push attribute section
        
        //push question details
        gameVariables.pushQs();
        
        
        //timer countdown
        for (x=30; x>0 ; x--){
            setTimeout(gameVariables.timer, 1000);
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
            gameVariables.missed++;
            gameVariables.clearDivs();
            setTimeout(gameVariables.pushMissed,3000);
        }
        
        //question to reshow the the start button should the array finish after all is done
        if ((gameVariables.correct + gameVariables.incorrect + gameVariables.missed) ==  (gamePlayArray.length-1)) {
            gameVariables.clearDivs();
            //brings start button back upon completion
            $('#startbtn').css({"display":"block"});
            $('#startText').css({"display":"block"});
        }
        
    };
    
    
    
 });




