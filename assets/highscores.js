// Link the score from our localStorage into the DOM


const highScoreList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML = 
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')

// This function erases the listed names on the High Score Page
$("#clear").on("click", function (event) {
    $("#highScoresList").empty();
});

// This function erases the listed names from local storage memory, so they don't come back when refreshing the page
$("#clear").on("click", function (event) {
    window.localStorage.clear();
});

