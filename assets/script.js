// declare useful elements
let currentDayEl = $('#currentDay');
let dayEl = $('.container');

let hour9El = $('#hour-9');
let hour10El = $('#hour-10');
let hour11El = $('#hour-11');
let hour12El = $('#hour-12');
let hour13El = $('#hour-13');
let hour14El = $('#hour-14');
let hour15El = $('#hour-15');
let hour16El = $('#hour-16');
let hour17El = $('#hour-17');

let hour9TextArea = $('#hour-9-entry');
let hour10TextArea = $('#hour-10-entry');
let hour11TextArea = $('#hour-11-entry');
let hour12TextArea = $('#hour-12-entry');
let hour13TextArea = $('#hour-13-entry');
let hour14TextArea = $('#hour-14-entry');
let hour15TextArea = $('#hour-15-entry');
let hour16TextArea = $('#hour-16-entry');
let hour17TextArea = $('#hour-17-entry');

let hour9Save = $('#hour-9-save');
let hour10Save = $('#hour-10-save');
let hour11Save = $('#hour-11-save');
let hour12Save = $('#hour-12-save');
let hour13Save = $('#hour-13-save');
let hour14Save = $('#hour-14-save');
let hour15Save = $('#hour-15-save');
let hour16Save = $('#hour-16-save');
let hour17Save = $('#hour-17-save');

let saveButtonAll = $('.saveBtn');
let textAreasAll = $('.description');

// let retrievedHour9Entry = localStorage.getItem("hour-9-entry");
// hour9TextArea.text(retrievedHour9Entry);

// TO DO: (?) add everything in function so it all occurs when page loads (?)

// TIMER✅
// create a function which shows the current date/time and refreshes every second
function displayTime() {
    // let rightNow = moment().format('DD MMM YYYY [at] hh:mm:ss a');
    let rightNow = moment().format('dddd, Do MMMM');
    currentDayEl.text(rightNow);
};

setInterval(displayTime, 1000);


// CALENDER SAVING AND RETRIEVING TEXT ENTRIES✅
// is user clicks save, store event info in local storage so remains on page when user refreshes
    // type something in text area
    // if click save, store text in local storage (only save text corresponding to button clicked)
    // extract text from local storage
    // text entry should be replaced with extracted value
    // text should remain if page refreshed

// CODE
    // on click of save button, run function:
    // save text entry of current text area to local storage
    // retrieve text entry from local storage and replace original text

// hour9Save.on('click', function(){
//     localStorage.setItem("hour-9-entry", hour9TextArea.val());
// })

saveButtonAll.on('click', function(){
    let key = $(this).attr('id').replace('save', 'entry');
    console.log(key);
    localStorage.setItem(key, $('#'+ key).val());
})

for(var i=9; i<18; i++){
    var key = `hour-${i}-entry`;
    let retrievedEntry = localStorage.getItem(key);
    $('#' + key).text(retrievedEntry);
}


// ----------------------------------------------------------------------------------------------

// CALENDAR SHOWING TIMEBLOCK COLOURS BASED ON CURRENT TIME
// set current time variable to current hour using moment.js
// give each text area a property called data-time and make value "9" etc based on which hour
// target each text area based on 
// if data-time < moment.js time = show text area background as grey
// if data-time = moment.js time = show text area background as red
// if data-time > moment.js time = show text area background as green

// CODE
let currentHour = moment().format('H');
console.log(currentHour);

let ninthHour = hour9TextArea.attr("data-time");
console.log(ninthHour);

function test(){
if(ninthHour < currentHour){
    console.log("success");
}
else{
    console.log("fail");
}
};


test();