// Link the score from our localStorage into the DOM


const highScoreList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML = 
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')


$("#clear").on("click", function (event) {
    $("#highScoresList").empty();
});


$("#clear").on("click", function (event) {
    window.localStorage.clear();
});