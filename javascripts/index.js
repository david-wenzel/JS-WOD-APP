// This is for javaScript

// STOPWATCH
// vars to hold values

let seconds = 0;
let minutes = 0;
let hours = 0;

//TIMER FUNCTIONALITY AND LOGIC

function startTimer(){
    seconds++;

    //LOGIC TO INCREMENT TO NEXT VALUE
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
        if(minutes / 60 === 1){
            minutes = 0;
            hours ++;
        }
    }

//DISPLAY TIME TO USER
    document.querySelector('.display').innerText = hours + ':' + minutes + ':' + seconds;
}

setInterval(startTimer, 1);
