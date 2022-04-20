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

function startTimer() {
    seconds++

    //LOGIC TO INCREMENT TO NEXT VALUE
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    // DISPLAYS 0 IN FIRST SPOT WHEN DIGITS ARE SINGULAR
    if (seconds < 10) {
        displaySeconds = '0' + seconds.toString();
    }
    else {
        displaySeconds = seconds;
    }
    if (minutes < 10) {
        displayMinutes = '0' + minutes.toString();
    }
    else {
        displayMinutes = minutes;
    }
    if (hours < 10) {
        displayHours = '0' + hours;
    }
    else {
        displayHours = hours;
    }
    //DISPLAY TIME TO USER
    document.querySelector('.display').innerText = displayHours + ':' + displayMinutes + ':' + displaySeconds;
}

// EVENT LISTENER ON THE STARTSTOP BUTTON     
document.getElementById('startstop').addEventListener('click', () => {

    if (document.getElementById('startstop').innerText === 'START') {
        //start timer 
        interval = setInterval(startTimer, 1000);
        document.getElementById('startstop').innerText = 'PAUSE';
        document.querySelector('.display').style.color = 'green';
    } else {
        document.getElementById('startstop').innerText = 'START';
        clearInterval(interval)
        document.querySelector('.display').style.color = 'yellow';
    }

})

//END BUTTON
document.getElementById('reset').addEventListener('click', () => {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementsByClassName('display').innerText = '00:00:00'
    //document.querySelector('.display').innerText = <<<<< this will bring it back to zero while the one above just stops it 
    document.getElementById('startstop').innerText = 'NEW ATTEMPT'
    document.querySelector('.display').style.color = 'red';
})

// pulling photo and descriton from json server


// const wodFromApi = res.workouts[0].img

function loadWod() {
    fetch('http://localhost:3000/db')
        .then(res => res.json())
        .then(res => {
            const img = document.createElement('img')
            img.src = res.workouts[0].img

            const wodResult = document.getElementById('wod')

            wodResult.append(img)

        })
}
loadWod()


// load date onto dom
var today = new Date();

var date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear()

document.getElementById('currentDate').innerText = date