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
    $('.difficulty').html(`Difficulty: ${questions[counter].difficulty.toUpperCase()}`)
    $('.counter').html(`${counter+1}/10`)
    $('.question').html(`Question: ${questions[counter].question}`)
    $('.one').html(`${questions[counter].incorrect_answers[0]}`)
    $('.two').html(`${questions[counter].incorrect_answers[1]}`)
    $('.three').html(`${questions[counter].incorrect_answers[2]}`)
    $('.four').html(`${questions[counter].correct_answer}`)
    sortUL('.answers')
}
const start = (e)=> {
    $('.results').hide()
    $('.result').hide()
    fetch('https://opentdb.com/api.php?amount=10&type=multiple')
    .then( res => res.json())
    .then(res => {
        let correctCount=0
        let triviaIndex=0
        let currentQuestions = res.results
        createQCard (currentQuestions, triviaIndex)
        triviaIndex ++
        $('.answers').on('click', (e) => {
            let $target = e.target
            let $currentTarget = e.currentTarget
            if($(e.target).is('.incorrect')){
                $(".api").effect( "shake", {times:4}, 250 )
            } 
            if($(e.target).is('.correct')){
                if($('.correct').css('color')==='rgb(0, 0, 0)'){
                correctCount++
                }
            }
            if (triviaIndex === 10) {
                $('.result').show()
                $('.result').on('click', function (event) {
                    $('.results').html(`You got ${correctCount} out of 10`)
                    $('.result').hide()
                    $('.results').show()
                    triviaIndex=0
                    })
            }
            $('.incorrect').css('color','red')
            $('.correct').css('color','green')
        })
        $('.next').on('click', function (event) {
            if (triviaIndex === 9) {
                $('.next').hide()
            }
            $('li').css('color','black')
            createQCard(currentQuestions, triviaIndex)
            triviaIndex ++
            })
        $('.reset').on('click', function (event) {
            $('li').css('color','black')
            $('.reset').off()
            $('.next').off()
            $('.next').show()
            $('.results').hide()
            $('.result').off()
            correctCount=0
            start()
        })
    })
};
document.addEventListener('DOMContentLoaded', start);