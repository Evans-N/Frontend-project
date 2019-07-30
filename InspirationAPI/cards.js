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