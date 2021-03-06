// I'm using querySelector because I can change between class and ID and not affect my code

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []


var count = 41
var interval = setInterval(function () {
    count--;
    document.getElementById('timer').innerHTML = count;
 
    if (count <= 0) {

        clearInterval(interval);
        localStorage.setItem('mostRecentScore', score)
        window.location.assign('end.html');
        // or...
        alert("You're out of time!");
    }

    // if (selectedAnswer === 'incorrect') {
    //     count = count - 10;
    // }
}, 1000);


let questions = [
    
    {
        question: 'How many soccer players should each team have on the field at the start of each match?',
        choice1: '10',
        choice2: '11',
        choice3: '12',
        choice4: '9',
        answer: 2
    }, 
    {
        question: 'When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?',
        choice1: '5',
        choice2: '4',
        choice3: '6',
        choice4: '7',
        answer: 3
    }, 
    {
        question: 'What country won the very first FIFA World Cup in 1930?',
        choice1: 'Brazil',
        choice2: 'Argentina',
        choice3: 'Uruguay',
        choice4: 'Peru',
        answer: 3
    }, 
    {
        question: 'What year was the very first model of the iPhone released?',
        choice1: '2007',
        choice2: '2006',
        choice3: '2005',
        choice4: '2004',
        answer: 1
    }, 
    {
        question: 'Which animal can be seen on the Porsche logo?',
        choice1: 'Dog',
        choice2: 'Horse',
        choice3: 'Dragon',
        choice4: 'Chimera',
        answer: 2
    }, 
    {
        question: 'How many Earths could fit inside the sun?',
        choice1: '300',
        choice2: '1,300',
        choice3: '300,000',
        choice4: '1,300,000',
        answer: 4
    }, 
    {
        question: 'Which country consumes the most chocolate per capita?',
        choice1: 'United States',
        choice2: 'Netherlands',
        choice3: 'Switzerland',
        choice4: 'France',
        answer: 3
    }, 
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) *100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        if (classToApply === 'correct') {
        incrementScore(SCORE_POINTS)
        } else {
        count = count - 10
        }
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score

}

startGame()