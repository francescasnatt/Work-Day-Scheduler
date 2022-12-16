// declare useful elements
let currentDayEl = $('#currentDay');
let calendarEl = $('.container');

// TO DO: (?) add everything in function so it all occurs when page loads (?)

// TIMER✅
// create a function which shows the current date/time and refreshes every second
function displayTime() {
    // let rightNow = moment().format('DD MMM YYYY [at] hh:mm:ss a');
    let rightNow = moment().format('dddd, Do MMMM');
    currentDayEl.text(rightNow);
};

setInterval(displayTime, 1000);


// CALENDER SAVING AND RETRIEVING TEXT ENTRIES
// is user clicks save, store event info in local storage so remains on page when user refreshes
    // type something in text area
    // if click save, store text in local storage (only save text corresponding to button clicked)
    // extract text from local storage
    // text entry should be replaced with extracted value
    // text should remain if page refreshed



// CALENDAR SHOWING COLOURS BASED ON CURRENT TIME
// give each div a property called data-time and make value "9" etc based on which hour
// if data-time < moment.js time = show as grey
// if data-time = moment.js time = show as red
// if data-time > moment.js time = show as green
