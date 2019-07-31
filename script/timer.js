var mm=1;
var timePast;

const garyAlert = () => {
    $jokeContainer = $(`#jokeCont`)
    let prevMessage = $jokeContainer.html()
    $jokeContainer.removeClass('hidden')
    
    if (timePast !== `0:0:0`) {
        $jokeContainer.html(`Hello you've been on this page for ${mm} minutes...`)
        setTimeout(() => {
            if(prevMessage === ``){
                
            }else{
                $jokeContainer.html(prevMessage)
            }
        },6000)
        
        if($jokeContainer.html()==prevMessage){
            $jokeContainer.html(prevMessage) 
        }
        
    }else{
        $jokeContainer.html(`Welcome to the page!`)
        setTimeout(() => {
                $jokeContainer.addClass('hidden')
        },6000)
    }
}
const timer = () => {
    
    var currentTime = new Date().getTime();
    let startTime = JSON.parse(sessionStorage.getItem(`startTime`))
    
    if((mm%5 === 0||mm==0)) {garyAlert()} else{console.log(`hi`)};

    if(startTime == null){
        
        sessionStorage.setItem(`startTime`, JSON.stringify(currentTime))
    }else {
        let startTime = JSON.parse(sessionStorage.getItem(`startTime`))
        
        
        let timerPast = currentTime - startTime;
        
        console.log(timerPast)
        var msec = timerPast;
        
        var hh = Math.floor(msec / 1000 / 60 / 60);
        msec -= hh * 1000 * 60 * 60;
        mm = Math.floor(msec / 1000 / 60);
        msec -= mm * 1000 * 60;
        var ss = Math.floor(msec / 1000);
        msec -= ss * 1000;

        timePast = `${hh}:${mm}:${ss}`
    }
    console.log(`mm:${mm}`)
    $(`#timer`).html(timePast)
    return timePast;
}
timer()
setInterval(() => { console.log(timer()); }, 1000);



