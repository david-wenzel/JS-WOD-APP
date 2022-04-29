# WORKOUT OF THE DAY JAVASCRIPT PROJECT PHASE-1

### Overview

INTEGRATED Workout-of-the-Day webapp is a simple, single page applicaiton used to;

-Elegantly and easily display a workout or instruction to users
-Provide users with an easy to use stopwatch to keep track of thier workout
-Display a description of the brands philosophy to users
-Provide a newsletter signup form to users

The Workout-of-the-Day webapp is a single page aplication that pulls down a workout from an api, displays it on the DOM and allows the user to time their workout. The .fetch functionallity is currenlty set up with a mock JSON server and is programmed to pull down the last added 'workout' and display it on the DOM. The stopwatch funcationality is coded using javascript and is triggered to 'start,' 'pause,' and 'stop' via event listeners places on 2 buttons. Aditially, there are two modal-pop-up windows triggered by nav-bar elements. The 'about' modal descirbes the product to the user while the 'newsletter' modal allows the user to sign up for an email. Currenlty the newsletter modal simply mocks a sign-up and displays a thank you message to the user. 

### How to Install and Use

To install and use you will need to have JSON installed onto your machine and will need to run $json-server --watch db.json in the approprate file to use and experiment with the page. 