<<<<<<< HEAD
const timer = () => {
    
    var today = new Date();
    
    var [hours, minutes, seconds]  = [today.getHours(), today.getMinutes(), today.getSeconds()];
   
    var currentTime = [hours, minutes, seconds];

    var timePast;
    let startTime = JSON.parse(sessionStorage.getItem(`startTime`))
    
    if(startTime == null){
        
        sessionStorage.setItem(`startTime`, JSON.stringify(currentTime))
    }else {
        let [startHours, startMinutes, startSeconds] = JSON.parse(sessionStorage.getItem(`startTime`))
            
        var today = new Date();
        
        timePast = `${hours - startHours}:${minutes - startMinutes}:${seconds - startSeconds}`

        
        
    }
    return timePast;
}
timer()
setInterval(() => { console.log(timer()); }, 1000);


$(function(){
    var jokeIndex = Math.floor(Math.random()*367);
     const getJoke = () => {
        $jokeBox = $(`#jokeBox`);
        $jokeButton = $(`#newJokeButton`)
        
        console.log(jokeIndex)
        if ($jokeBox.hasClass('active')) {
           $jokeBox.html(data[jokeIndex][`punchline`])
            $jokeButton.html(`Need another?`)

        }else{
             jokeIndex = Math.floor(Math.random()*367)
            $jokeBox.html(data[jokeIndex][`setup`])
            $jokeButton.html(`The Anwser`)

        }
        $jokeBox.toggleClass('active')
       
}
    $(`#newJokeButton`).on('click', getJoke)
    
   
})
=======
function sortUL(selector) {
    var $ul = $(selector);
    $ul.find('li').sort(function (a, b) {
        var upA = $(a).text().toUpperCase();
        var upB = $(b).text().toUpperCase();
        return (upA < upB) ? -1 : (upA > upB) ? 1 : 0;
    }).appendTo(selector);
};
function createQCard (questions, counter) {
    $('.category').html(`Category: ${questions[counter].category}`)
    $('.difficulty').html(`Difficulty: ${questions[counter].difficulty}`)
    $('.counter').html(`${counter+1}/10`)
    $('.question').html(`Question: ${questions[counter].question}`)
    $('.one').html(`${questions[counter].incorrect_answers[0]}`)
    $('.two').html(`${questions[counter].incorrect_answers[1]}`)
    $('.three').html(`${questions[counter].incorrect_answers[2]}`)
    $('.four').html(`${questions[counter].correct_answer}`)
    sortUL('.answers')
}
const start = (e)=> {
    fetch('https://opentdb.com/api.php?amount=10&type=multiple')
    .then( res => res.json())
    .then(res => {
        let triviaIndex=0
        let currentQuestions = res.results
        createQCard (currentQuestions, triviaIndex)
        triviaIndex ++
        console.log(currentQuestions);
        //creates a new event listener every time reset is clicked and breaks functionality
        $('.next').on('click', function (event) {
            createQCard(currentQuestions, triviaIndex)
            triviaIndex ++
            console.log(triviaIndex);
            })
    })
};
$('.reset').on('click', function (event) {
    start()
    triviaIndex = 0
    })
    document.addEventListener('DOMContentLoaded', start);
>>>>>>> f2dc5dc37b0c5023b56a4415b7f80bbfd1e8f56b
