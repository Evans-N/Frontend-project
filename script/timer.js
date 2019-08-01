var timerPast;
var startUpMsgTxt = $(`#jokeCont`).html();
var antiRepeat= true; 

const startUpMsg = () => {
    let $jokeContainer = $(`#jokeCont`);
    
    $jokeContainer.removeClass('hidden')
    setTimeout(()=>{
        $jokeContainer.addClass('hidden')
    },6000)
}
startUpMsg();

const getHH = (msec) => {
    var hh = Math.floor(msec / 1000 / 60 / 60);
        msec -= hh * 1000 * 60 * 60;
        return [hh,msec];
}
const getMM = (msecH) => {
    let msec = getHH(msecH)[1]
    var mm = Math.floor(msec / 1000 / 60);
        msec -= mm * 1000 * 60;
        console.log(mm)
        return [mm,msec];
}
const getSS = (msecM) => {
    let msec = getMM(msecM)[1];
    var ss = Math.floor(msec / 1000);
        msec -= ss * 1000;
        return[ss,msec]
}


const garyAlert = () => {
    let $jokeContainer = $(`#jokeCont`)
    let $jokeBox = $(`#jokeBox`)
    
    $jokeContainer.removeClass('hidden')
    
    $jokeBox.html(`Hello you've been on this page for ${getMM(timerPast)[0]+(getHH(timerPast)[0]*60)} minutes...`)         
    
}

const timer = () => {
    let $jokeContainer = $(`#jokeCont`)
    
    var currentTime = new Date().getTime();
    let startTime = JSON.parse(sessionStorage.getItem(`startTime`))
    let timePast;
    var timeOut;
    
    var antirepeat = () =>{
        antiRepeat= true;
        console.log(`hi`)
        clearTimeout(timeOut);

    }
    $(`#newJokeButton`).on('click',antirepeat);
    console.log(`check here$5}`)
    if((getMM(timerPast)[0] % 5 === 0 )&&getSS(timerPast)[0] == 0) { garyAlert();console.log(`it worked`)} else{console.log(`no`)};
    
    if(startTime == null){
        
        sessionStorage.setItem(`startTime`, JSON.stringify(currentTime))
    }else {
        let startTime = JSON.parse(sessionStorage.getItem(`startTime`))
        
        
        timerPast = currentTime - startTime;
        
        console.log(timerPast)
        var msec = timerPast;
        
        var hh = getHH(msec)[0];
        
        
        var mm = getMM(msec)[0];
        
        
        let msecSS = getSS(msec);
        var ss = msecSS[0];
        msec = msecSS[1];
        
        var timeArray = [hh,mm,ss]
        let fixedTime = [];

        timeArray.forEach((val)=>{
            if (val.toString().length == 1){
                val = `0${val}`
                // console.log(newVal)
            }
            fixedTime.push(val)
        })


        console.log(fixedTime)

        timePast = `${fixedTime[0]}:${fixedTime[1]}:${fixedTime[2]}`
    }
    
    if(antiRepeat==true){
        
        
        if($jokeContainer.hasClass(`hidden`)) {
            
        }else{
            antiRepeat = false
            console.log(antiRepeat)
            timeOut = setTimeout(function(){
                $jokeContainer.addClass('hidden')
                antiRepeat=true;
            },6000)

        }  
    }
    
    
    
    console.log(`mm:${mm}`)
    $(`#timer`).html(timePast)
    return timePast;
}
timer()
setInterval(() => { console.log(timer()); }, 1000);




