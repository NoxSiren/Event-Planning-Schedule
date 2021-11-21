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

// 930 AM
var task930 = document.getElementById("btn930");
var taskTxt930 = document.getElementById("task930");
task930.addEventListener("click", function(event){
    event.preventDefault();
    var nineThirtyAM = taskTxt930.ariaValue
    localStorage.setItem("nineThirtyAM", nineThirtyAM);
})

// 10 AM
var task10 = document.getElementById("btn10");
var taskTxt10 = document.getElementById("task10");
task10.addEventListener("click", function(event){
    event.preventDefault();
    var tenAM = taskTxt10.ariaValue
    localStorage.setItem("tenAM", tenAM);
})

// 1030 AM
var task1030 = document.getElementById("btn1030");
var taskTxt1030 = document.getElementById("task1030");
task1030.addEventListener("click", function(event){
    event.preventDefault();
    var tenThirtyAM = taskTxt1030.ariaValue
    localStorage.setItem("tenThirtyAM", tenThirtyAM);
})

// 11 AM
var task11 = document.getElementById("btn11");
var taskTxt11 = document.getElementById("task11");
task11.addEventListener("click", function(event){
    event.preventDefault();
    var elevenAM = taskTxt11.ariaValue
    localStorage.setItem("elevenAM", elevenAM);
})

// 1130 AM
var task1130 = document.getElementById("btn1130");
var taskTxt1130 = document.getElementById("task1130");
task1130.addEventListener("click", function(event){
    event.preventDefault();
    var elevenThirtyAM = taskTxt1130.ariaValue
    localStorage.setItem("elevenThirtyAM", elevenThirtyAM);
})

// 12 PM
var task12 = document.getElementById("btn12");
var taskTxt12 = document.getElementById("task12");
task12.addEventListener("click", function(event){
    event.preventDefault();
    var twelvePM = taskTxt12.ariaValue
    localStorage.setItem("twelvePM", twelvePM);
})

// 1230 PM
var task1230 = document.getElementById("btn1230");
var taskTxt1230 = document.getElementById("task1230");
task1230.addEventListener("click", function(event){
    event.preventDefault();
    var twelveThirtyPM = taskTxt1230.ariaValue
    localStorage.setItem("twelveThirtyPM", twelveThirtyPM);
})

// 1 PM
var task1 = document.getElementById("btn1");
var taskTxt1 = document.getElementById("task1");
task11.addEventListener("click", function(event){
    event.preventDefault();
    var onePM = taskTxt1.ariaValue
    localStorage.setItem("onePM", onePM);
})

// 130 PM
var task130 = document.getElementById("btn130");
var taskTxt130 = document.getElementById("task130");
task130.addEventListener("click", function(event){
    event.preventDefault();
    var oneThirtyPM = taskTxt130.ariaValue
    localStorage.setItem("oneThirtyPM", oneThirtyPM);
})

// 2 PM
var task2 = document.getElementById("btn2");
var taskTxt2 = document.getElementById("task2");
task2.addEventListener("click", function(event){
    event.preventDefault();
    var twoPM = taskTxt2.ariaValue
    localStorage.setItem("twoPM", twoPM);
})

// 230 PM
var task230 = document.getElementById("btn230");
var taskTxt230 = document.getElementById("task230");
task230.addEventListener("click", function(event){
    event.preventDefault();
    var twoThirtyPM = taskTxt230.ariaValue
    localStorage.setItem("twoThirtyPM", twoThirtyPM);
})

// 3 PM
var task3 = document.getElementById("btn3");
var taskTxt3 = document.getElementById("task3");
task3.addEventListener("click", function(event){
    event.preventDefault();
    var threePM = taskTxt3.ariaValue
    localStorage.setItem("threePM", threePM);
})

// 330 PM
var task330 = document.getElementById("btn330");
var taskTxt130 = document.getElementById("task330");
task330.addEventListener("click", function(event){
    event.preventDefault();
    var threeThirtyPM = taskTxt330.ariaValue
    localStorage.setItem("threeThirtyPM", threeThirtyPM);
})

// 4 PM
var task4 = document.getElementById("btn4");
var taskTxt4 = document.getElementById("task4");
task4.addEventListener("click", function(event){
    event.preventDefault();
    var fourPM = taskTxt4.ariaValue
    localStorage.setItem("fourPM", fourPM);
})

// 430 PM
var task430 = document.getElementById("btn430");
var taskTxt430 = document.getElementById("task430");
task430.addEventListener("click", function(event){
    event.preventDefault();
    var fourThirtyPM = taskTxt430.ariaValue
    localStorage.setItem("fourThirtyPM", fourThirtyPM);
})

// 5 PM
var taskTxt5 = document.getElementById("task5");
task5.addEventListener("click", function(event){
    event.preventDefault();
    var fivePM = taskTxt5.ariaValue
    localStorage.setItem("fivePM", fivePM);
})