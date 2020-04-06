var buttonColours = [];
buttonColours[0] = 'red';
buttonColours[1] = 'blue';
buttonColours[2] = 'green';
buttonColours[3] = 'yellow';
var randomChoosenColours;
var gamePattern = [];
var userChoosenColor;
var userClickedPattern = [];
var level = 0;
var started = false;


playSound(randomChoosenColours);

function checkAnswer(index){
    if(userClickedPattern[index] == gamePattern[index]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence(); 
            },1000)
        } 
    } else{
        playSound('wrong');
        $('body').addClass('game-over');
        $('#level-title').text('Game Over, Click Here to Restart');
        document.getElementById('level-title').removeAttribute('disabled');

        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);

        startOver();
    }
}

function nextSequence(){
    userClickedPattern = [];
    level++;
    if(level > 0){
        document.getElementById('level-title').innerHTML = `Level ${level}`;
    }
    let randomNumber = (Math.floor(Math.random() * 4) );
    var randomChoosenColours = buttonColours[randomNumber];
    gamePattern.push(randomChoosenColours);
    
    $(`#${randomChoosenColours}`).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColours);
}

function playSound(color){
    var audio = new Audio(`sounds/${color}.mp3`);
    audio.play();
}

function animatedPress(currentColor){
    let style = 'box-shadow: 0 0 20px white; background-color: grey;';
    document.getElementById(`${currentColor}`).style = style;
    setTimeout(function(){
        document.getElementById(`${currentColor}`).style = `background-color: ${currentColor}; box-shadow: 0;`;
    }, 100)
}

var red = document.getElementById('red').addEventListener('click', function(){
    userChoosenColor = 'red';
    userClickedPattern.push(userChoosenColor);
    playSound(userChoosenColor);
    animatedPress(userChoosenColor);
    checkAnswer(userClickedPattern.length-1);
});
var blue = document.getElementById('blue').addEventListener('click', function(){
    userChoosenColor = 'blue';
    userClickedPattern.push(userChoosenColor);
    playSound(userChoosenColor);
    animatedPress(userChoosenColor);
    checkAnswer(userClickedPattern.length-1);
});
var green = document.getElementById('green').addEventListener('click', function(){
    userChoosenColor = 'green';
    userClickedPattern.push(userChoosenColor);
    playSound(userChoosenColor);
    animatedPress(userChoosenColor);
    checkAnswer(userClickedPattern.length-1);
});
var yellow = document.getElementById('yellow').addEventListener('click', function(){
    userChoosenColor = 'yellow';
    userClickedPattern.push(userChoosenColor);
    playSound(userChoosenColor);
    animatedPress(userChoosenColor);
    checkAnswer(userClickedPattern.length-1);
});

var startButton = document.getElementById('level-title').addEventListener('click', function(){
    document.getElementById('level-title').setAttribute('disabled', 'true');
    nextSequence();
    started = true;
})

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }