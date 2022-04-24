// javaScript
document.body.classList.add('fade');
window.addEventListener('DOMContentLoaded', function () {
    // do everything here...
    window.setTimeout(function() {
        document.body.classList.remove('fade');
      }, 230);

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
            document.querySelector('.display').style.color = '#267326';
        } else {
            document.getElementById('startstop').innerText = 'START';
            clearInterval(interval)
            document.querySelector('.display').style.color = '#b3b300';
        }

    })

    //END BUTTON
    document.getElementById('reset').addEventListener('click', () => {
        clearInterval(interval);
        seconds = 0;
        minutes = 0;
        hours = 0;
        //document.querySelector('.display').innerText = <<<<< this will bring it back to zero while the one above just stops it 
        document.getElementById('startstop').innerText = 'NEW ATTEMPT'
        document.querySelector('.display').style.color = '#c63939';
    })

    // load date onto dom
    var today = new Date();

    var date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear()

    document.getElementById('currentDate').innerText = date

    // const wodFromApi = res.workouts[0].img

    function loadWod() {
        fetch('http://localhost:3000/db')
            .then(res => res.json())
            .then(res => {
                const img = document.createElement('img')
                img.src = res.workouts[res.workouts.length - 1].img

                const wodResult = document.getElementById('wod')

                wodResult.append(img)
                img.setAttribute("id", "wodImage");
                img.setAttribute('draggable', 'false')
            })
    }
    loadWod()

    // about button click
    const about = document.getElementById('about')
    const close = document.getElementById('close')
    function addFlex(id){
        document.querySelector(id).style.display = 'flex'
    };
    function removeFlex(id){
        document.querySelector(id).style.display = 'none'
    }

    about.addEventListener('click', () => {
        addFlex('.about-modal');
    })    

    close.addEventListener('click', () => {
        removeFlex('.about-modal');
    })

    //newsletter modal show
    const newsletter = document.getElementById('newsletter');
    const closeNewsletter = document.getElementById('close-newsletter')
    newsletter.addEventListener('click', () => {
        addFlex('.newsletter-modal')
    } )
    closeNewsletter.addEventListener('click', () => {
        removeFlex('.newsletter-modal')
    })
    //newsletter form
    const form = document.getElementById('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        form.innerText = 'Thank-You'
    })
});