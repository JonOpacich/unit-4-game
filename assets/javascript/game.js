
var totalScore = 0;
var randomNumber = 0;
var wins = 0;
var losses = 0;
var pokemonArray = ["#Pikachu", "#Squirtle", "#Charmander", "#Bulbasaur"];

function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 120) + 19;
}

function assignNewPokeValues() {
    for (var i = 0; i < 4; i++) {
        $(pokemonArray[i]).attr("value", (Math.floor(Math.random() * 12) + 1));
    }
};

function resetHTML() {
    $("#randomNumber").html("Make this Number: <br>" + randomNumber);
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
    $("#scoreTotal").html(totalScore);
}

function resetAll() {
    generateRandomNumber();
    totalScore = 0;
    resetHTML();
    assignNewPokeValues();
}

//initial set-up
assignNewPokeValues();
generateRandomNumber();
resetHTML();

// on Click function
function pokeClick() {
    totalScore += parseInt($(this).attr("value"));
    $("#scoreTotal").html("total score: " + totalScore);
   
    //if-elseif statement to determine if win or loss
    if (totalScore === randomNumber) {
        wins++;
        resetAll();
    }
    else if (totalScore > randomNumber) {
        losses++;
        resetAll();
    };
};

$(document).on("click", ".pokemon", pokeClick);

