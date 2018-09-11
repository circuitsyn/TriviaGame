//~~*~~*~~ Psuedo Code ~~*~~*~~

var gameVariables = {
    correct: 0,
    incorrect: 0,
    missed: 0,

};

//~~*~~*~~ Question Array Variables ~~*~~*~~

let gamePlayArray = [
    sonic = {
        question: 'Name a famous SEGA character that is ultra fast, was a flagship for the system and has over 100 titles to date!',
        choice1: '<button type="button" class="btn btn-outline-dark">A. Purple Durple</button>',
        choice2: '<button type="button" class="btn btn-outline-dark">B. Buzby</button>',
        choice3: '<button type="button" class="btn btn-outline-dark">C. Sonic</button>',
        choice4: '<button type="button" class="btn btn-outline-dark">D. Tails</button>',
        rightAnswer: 'You got it right! Well done. The answer is Sonic!',
        wrongAnswer: 'You got it wrong! The correct answer is Sonic! You gott abe faster next time..!',
        gif: '<img class="images" src="../../assets/images/Sonic.gif" alt="Sonic The Hedgehog">',
        audio: '',
        clicked: false,
    },

    mario = {
        question: 'Name a famous Nintendo Character that is from a famous 2d side scoller and is always trying to rescue a princess!',
        choice1: 'Mario',
        choice2: 'Donkey Kong',
        choice3: 'Spider-man',
        choice4: 'The Terminator',
        rightAnswer: 'You got it right! Well done. The answer is Mario!',
        wrongAnswer: 'You got it wrong! The correct answer is Mario! You gott abe faster next time..!',
        gif: '<img class="images" src="../../assets/images/Mario.gif" alt="Mario">',
        audio: '',
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
        $('#question').empty();
        $('#choiceA').empty();
        $('#choiceB').empty();
        $('#choiceC').empty();
        $('#choiceD').empty();
        $('#time').empty();

        //push attribute section

        //push question details
        $('#question').append(gamePlayArray[0].question);
        $('#choiceA').append(gamePlayArray[0].choice1);
        $('#choiceB').append(gamePlayArray[0].choice2);
        $('#choiceC').append(gamePlayArray[0].choice3);
        $('#choiceD').append(gamePlayArray[0].choice4);
    }
});

