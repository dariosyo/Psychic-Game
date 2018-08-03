var wins = 0;
var lose = 0;
var guessLeft = 9;
var guessedLetters = [];
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var winAudio = new Audio("./assets/sound/1_person_cheering-Jett_Rifkin-1851518140.mp3");
var loseAudio = new Audio("./assets/sound/Sad_Trombone-Joe_Lamb-665429450.mp3");
document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessLeft;
document.onkeyup = function(event)
{
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessLeft;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var playerGuess = event.key;
if ( guessLeft > 0)
{
    guessedLetters.push(playerGuess); 
    document.querySelector('#guessedLetters').innerHTML = "Your Guesses so far: " + guessedLetters;  
    
    if (computerGuess === playerGuess)
    {
        wins++;
        document.querySelector('#win').innerHTML = "Wins: " + wins;
        winAudio.play();
        alert("Congragulation!  You are a Psychic!!! ");
        guessLeft = 9;
        guessedLetters.length = 0;}
    
    else if(computerGuess !== playerGuess)
    {
    guessLeft--;
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessLeft;
    }
    
}

if(guessLeft == 0) 
    {

    lose++;
    document.querySelector('#lose').innerHTML = "Losses: " + lose;
    loseAudio.play();
    alert("You need to work on!");
    guessLeft = 9;
    guessedLetters.length = 0;
    
    }
};





