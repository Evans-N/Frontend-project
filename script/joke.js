    
    
    var jokeIndex = Math.floor(Math.random()*367);
     const getJoke = () => {
        
        
        $jokeBox = $(`#jokeBox`);
        $jokeButton = $(`#newJokeButton`)
        $jokeContainer = $(`#jokeCont`)
        
        $jokeContainer.removeClass(`hidden`);
        
        console.log(jokeIndex)
        if ($jokeBox.hasClass('active')) {
           $jokeBox.html(data[jokeIndex][`punchline`])
           console.log(data[jokeIndex][`punchline`]);
            // $jokeButton.html(`Need another?`)
            
            

        }else{
             jokeIndex = Math.floor(Math.random()*data.length)
            $jokeBox.html(data[jokeIndex][`setup`])
            // $jokeButton.html(`The Anwser`)
        
        }
        $jokeBox.toggleClass('active')
       console.log('hi')
}
    console.log(jokeIndex)
    $(`#newJokeButton`).on('click', getJoke)
    
   

