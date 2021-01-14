var timer = "";
var clock = "";
var question1 = ["I need to create ]

const quizCard = document.getElementById('cards');
const resultCard = document.getElementById('');
const submitButton = document.getElementById('submit');


function quizBuild () {
    const output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];

            for(letter in currentQuestion.answers){

                answers.push(
                    <label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                            ${letter} :
                            ${currentQuestion.answers[letter]}
                        </input>
                    </label>
                )
            }
        }
    )
    
    console.log(quizBuild)
}

function showResults () {
    
    console.log(showResults);
}



// display quiz
quizBuild();

const myQuestions = [ 
    {
        question: "my first question?",
        answers: {
            a: "answer 1"
            b: "answer 2"
            c: "answer 3"
            d: "answer 4"
        }
        correctAnswer: "c"
    },
    
    {
        question: "my second question?",
        answers: {
            a: "resposta 1"
            b: "resposta 2"
            c: "resposta 3"
            d: "resposta 4"
        }
        correctAnswer: "b"
    },
]

