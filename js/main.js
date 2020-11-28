// Select DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    task = document.getElementById('task');

// Options
const showAmPm = true;

// Show Time
function showTime(){
    let today = new Date();
    // let today = new Date('1995-12-17T03:24:00')
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background
function setBgGreet(){
    let today = new Date(),
    // let today = new Date('1995-12-17T03:24:00'),
        hour = today.getHours();

    if(hour < 12){
        // Morning
        document.body.style.backgroundImage = "url('./img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if(hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('./img/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e){
    if(e.type === 'keypress'){
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur(); // prevent cursor go to new line when user press enter
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Task
function getTask(){
    if (localStorage.getItem('task')===null){
        task.textContent = '[Enter your task]';
    } else {
        task.textContent = localStorage.getItem('task');
    }
}

// Set Task
function setTask(e){
    if(e.type === 'keypress'){
        if (e.which == 13 || e.keyCode == 13){
            localStorage.setItem('task', e.target.innerText);
            task.blur();
        }
    } else {
        localStorage.setItem('task', e.target.innerText);
    }
}




// Update content that user enter in local storage
name.addEventListener('keypress', setName);  // keypress is the event when user click enter on keyboard
name.addEventListener('blur', setName); // blur is the event when user mouse click outside the contenteditable
task.addEventListener('keypress', setTask);
task.addEventListener('blur', setTask);


// Run
showTime();
setBgGreet();
getName();
getTask();