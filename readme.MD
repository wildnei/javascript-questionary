# How to play

* In this trivia game you have 40 seconds to answer 5 questions, every time you answer incorrectly your time is reduced by 10 seconds, when your time reaches zero = game over.


# Technologies used

- [x] HTML
- [x] Javascript
- [x] CSS
- [x] FontAwesome
- [x] Bootstrap


# What I learned from this assignment 





# Change Log

- [x] Added Media Query for mobile version

```
@media screen and (max-width: 768px) {
    .choice-container {
        min-width: 20rem;
        font-size: 2.0rem;
    }
    .container {
        margin-top: 20px
    }
    #question {
        font-size: 25px;
    }
}
```

- [x] Fixed number of questions passing the MAX number established 
```
wrong: if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
correct: if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
```

- [x] Added 'clear' button to erase the score
```
$("#clear").on("click", function (event) {
    $("#highScoresList").empty();
});
```

- [x] Added function to clean the storage and make the values not return when refreshing the page 
```
refreshing the page
$("#clear").on("click", function (event) {
    window.localStorage.clear();
}); 
```

