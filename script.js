//Create daily planner schedule
//When planner is open, it opens to the current date at the top
//When scrolling down, 9am-5pm blocks
//When timeblocks are seen, it is color coded for events past, present, and future
//You can click on a time block, enter an event, and click a save button to save the event
//Text will be saved in local storage
//Refresh the page and saved events will be prelisted

//CURRENT Time Display
var timeDisplay = moment().format('LLLL')
document.getElementById("currentDay").innerHTML = timeDisplay;

//Stores the hour of the day as a number
var currentHour = moment().hours()
currentHour = parsInt(currentHour)

// 9 AM
var task9 = document.getElementById("btn9");
var taskTxt9 = document.getElementById("task9");
task9.addEventListener("click", function(event){
    event.preventDefault();
    var nineAM = taskTxt9.ariaValue
    localStorage.setItem("nineAM", nineAM);
})

// 10 AM
var task10 = document.getElementById("btn10");
var taskTxt10 = document.getElementById("task10");
task9.addEventListener("click", function(event){
    event.preventDefault();
    var tenAM = taskTxt10.ariaValue
    localStorage.setItem("tenAM", tenAM);
})

// 11 AM
var task11 = document.getElementById("btn11");
var taskTxt11 = document.getElementById("task11");
task11.addEventListener("click", function(event){
    event.preventDefault();
    var elevenAM = taskTxt11.ariaValue
    localStorage.setItem("elevenAM", elevenAM);
})

// 12 PM
var task12 = document.getElementById("btn12");
var taskTxt12 = document.getElementById("task12");
task12.addEventListener("click", function(event){
    event.preventDefault();
    var twelvePM = taskTxt12.ariaValue
    localStorage.setItem("twelvePM", twelvePM);
})

// 1 PM
var task1 = document.getElementById("btn1");
var taskTxt1 = document.getElementById("task1");
task11.addEventListener("click", function(event){
    event.preventDefault();
    var onePM = taskTxt1.ariaValue
    localStorage.setItem("onePM", onePM);
})

// 2 PM
var task2 = document.getElementById("btn2");
var taskTxt2 = document.getElementById("task2");
task2.addEventListener("click", function(event){
    event.preventDefault();
    var twoPM = taskTxt2.ariaValue
    localStorage.setItem("twoPM", twoPM);
})

// 3 PM
var task3 = document.getElementById("btn3");
var taskTxt3 = document.getElementById("task3");
task3.addEventListener("click", function(event){
    event.preventDefault();
    var threePM = taskTxt3.ariaValue
    localStorage.setItem("threePM", threePM);
})

// 4 PM
var task4 = document.getElementById("btn4");
var taskTxt4 = document.getElementById("task4");
task4.addEventListener("click", function(event){
    event.preventDefault();
    var fourPM = taskTxt4.ariaValue
    localStorage.setItem("fourPM", fourPM);
})

// 5 PM
var taskTxt5 = document.getElementById("task5");
task5.addEventListener("click", function(event){
    event.preventDefault();
    var fivePM = taskTxt5.ariaValue
    localStorage.setItem("fivePM", fivePM);
})