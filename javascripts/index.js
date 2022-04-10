// javaScript

// STOPWATCH
// vars to hold values
let seconds = 0;
let minutes = 0;
let hours = 0;

//VARS TO HOLD DISPLAY VALUES
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//IF I WANT TO REFACTOR AND USE DRY METHOD 
// let startStopButton = document.getElementById(startstop) 

//VAR TO define TIMER interval FUNCTION
let interval = null;

//TIMER FUNCTIONALITY AND LOGIC

function startTimer(){
    seconds++
    
    //LOGIC TO INCREMENT TO NEXT VALUE
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
        if(minutes / 60 === 1){
            minutes = 0;
            hours ++;
        }
    }
    
    // DISPLAYS 0 IN FIRST SPOT WHEN DIGITS ARE SINGULAR
    if(seconds < 10){
        displaySeconds = '0' + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }
    if(minutes < 10){
        displayMinutes = '0' + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }
    if(hours < 10){
        displayHours = '0' + hours;
    }
    else{
        displayHours = hours;
    }
    //DISPLAY TIME TO USER
    document.querySelector('.display').innerText = displayHours + ':' + displayMinutes + ':' + displaySeconds;
}

// EVENT LISTENER ON THE STARTSTOP BUTTON     
    document.getElementById('startstop').addEventListener('click', () =>{
        
            if( document.getElementById('startstop').innerText === 'START'){
                //start timer 
                interval = setInterval(startTimer, 1000);
                document.getElementById('startstop').innerText ='PAUSE';
            }else{ 
                document.getElementById('startstop').innerText ='START';
                clearInterval(interval)
            }
    
})

//END BUTTON
    document.getElementById('reset').addEventListener('click', () =>{
        clearInterval(interval);
        seconds = 0;
        minutes = 0;
        hours = 0;
        document.getElementsByClassName('display').innerText = '00:00:00'
        document.getElementById('startstop').innerText = 'START'
    })