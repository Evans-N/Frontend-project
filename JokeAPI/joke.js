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
