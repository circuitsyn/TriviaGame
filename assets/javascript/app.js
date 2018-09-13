//~~*~~*~~ Psuedo Code ~~*~~*~~

var gameVariables = {
    correct: 0,
    incorrect: 0,
    missed: 0,
    timer: function (){
        
        for (x=30; x>0 ; x-- ){
                setTimeout(function(){
                    (($('#time').html('Time Remaining: ' + x + ' Seconds!')), 1000);
                // $('#time').fadeIn(200).delay(600).slidUp(200);
                } )   
            }
        
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

console.log('all ' + gamePlayArray);
console.log(gamePlayArray[0]);
console.log('sonic ' + gamePlayArray[0].question);
console.log('mario ' + gamePlayArray[1].question);
console.log ('------------------');
$('#startbtn').click(function(){
    $('#startbtn').css({"display":"none"});
    for (i = 0; i < gamePlayArray.length; i++) {
        //Clearing out Divs as precaution each time
        // debugger;
        $('#question').empty();
        $('#choiceA').empty();
        $('#choiceB').empty();
        $('#choiceC').empty();
        $('#choiceD').empty();
        $('#time').empty();
        console.log(i);
        //push attribute section

        //push question details
        $('#question').append(gamePlayArray[i].question);
        $('#choiceA').append(gamePlayArray[i].choice1);
        $('#choiceB').append(gamePlayArray[i].choice2);
        $('#choiceC').append(gamePlayArray[i].choice3);
        $('#choiceD').append(gamePlayArray[i].choice4);
        gameVariables.timer();
        
        
        //Clickable Button Section
        $('#choiceA').click(function(i){
            gamePlayArray.clicked = true;
            if (gamePlayArray[i].choiceInput1 == gamePlayArray[i].answer) {
                console.log('Nope!');
            }
            else {

            }
        });

        $('#choiceB').click(function(i){
            gamePlayArray.clicked = true;
            if (gamePlayArray[i].choiceInput2 == gamePlayArray[i].answer) {
                console.log('Nope!');
            }
        });

        $('#choiceC').click(function(i){
            gamePlayArray.clicked = true;
            if (gamePlayArray[i].choiceInput3 == gamePlayArray[i].answer) {
                console.log('Yep!');
            }
        });

        $('#choiceD').click(function(i){
            gamePlayArray.clicked = true;
            if (gamePlayArray[i].choiceInput4 == gamePlayArray[i].answer) {
                console.log('Nope!');
            }
            
        });
    
    
        
    
    }
    //create check for end of time or buttons clicked
    // if ((timer === 0) || (clicked == true)) {
        
    // }
});



