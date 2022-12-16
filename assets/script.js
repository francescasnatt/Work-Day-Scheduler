// declare useful elements
let currentDayEl = $('#currentDay');
let calendarEl = $('#container');

// TO DO: (?) add everything in function so it all occurs when page loads (?)

// TIMER✅
// create a function which shows the current date/time and refreshes every second
function displayTime() {
    // let rightNow = moment().format('DD MMM YYYY [at] hh:mm:ss a');
    let rightNow = moment().format('dddd, Do MMMM');
    currentDayEl.text(rightNow);
};

setInterval(displayTime, 1000);

// CALENDAR SHOWING
// add rows to parent div and display on page
    // let timeBlockEl = $('<tr>').attr('border', '2px solid black');
    // let timeBlockCell = $('<td>').attr('border', '2px solid black');;
    // calendarEl.append(timeBlockEl);
    // timeBlockEl.append(timeBlockCell);

let timeBlock9 = $('<div>');
let timeBlock10 = $('<div>');
let timeBlock11 = $('<div>');
let timeBlock12 = $('<div>');
let timeBlock13 = $('<div>');
let timeBlock14 = $('<div>');
let timeBlock15 = $('<div>');
let timeBlock16 = $('<div>');
let timeBlock17 = $('<div>');






// CALENDER FUNCTIONING

// CALENDAR STYLED
// add classes to elements to give CSS styling