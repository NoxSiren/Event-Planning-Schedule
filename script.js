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
    var nineAM = taskTxt9.value
    localStorage.setItem("nineAM", nineAM);
})
var planner9get = localStorage.getItem("nineAM");
taskTxt9.textContent = planner9get;

// 930 AM
var task930 = document.getElementById("btn930");
var taskTxt930 = document.getElementById("task930");
task930.addEventListener("click", function(event){
    event.preventDefault();
    var nineThirtyAM = taskTxt930.value
    localStorage.setItem("nineThirtyAM", nineThirtyAM);
})
var planner930get = localStorage.getItem("nineThirtyAM");
taskTxt930.textContent = planner930get;

// 10 AM
var task10 = document.getElementById("btn10");
var taskTxt10 = document.getElementById("task10");
task10.addEventListener("click", function(event){
    event.preventDefault();
    var tenAM = taskTxt10.value
    localStorage.setItem("tenAM", tenAM);
})
var planner10get = localStorage.getItem("tenAM");
taskTxt10.textContent = planner10get;

// 1030 AM
var task1030 = document.getElementById("btn1030");
var taskTxt1030 = document.getElementById("task1030");
task1030.addEventListener("click", function(event){
    event.preventDefault();
    var tenThirtyAM = taskTxt1030.value
    localStorage.setItem("tenThirtyAM", tenThirtyAM);
})
var planner1030get = localStorage.getItem("tenThirtyAM");
taskTxt1030.textContent = planner1030get;

// 11 AM
var task11 = document.getElementById("btn11");
var taskTxt11 = document.getElementById("task11");
task11.addEventListener("click", function(event){
    event.preventDefault();
    var elevenAM = taskTxt11.value
    localStorage.setItem("elevenAM", elevenAM);
})
var planner11get = localStorage.getItem("elevenAM");
taskTxt11.textContent = planner11get;

// 1130 AM
var task1130 = document.getElementById("btn1130");
var taskTxt1130 = document.getElementById("task1130");
task1130.addEventListener("click", function(event){
    event.preventDefault();
    var elevenThirtyAM = taskTxt1130.value
    localStorage.setItem("elevenThirtyAM", elevenThirtyAM);
})
var planner1130get = localStorage.getItem("elevenThirtyAM");
taskTxt1130.textContent = planner1130get;

// 12 PM
var task12 = document.getElementById("btn12");
var taskTxt12 = document.getElementById("task12");
task12.addEventListener("click", function(event){
    event.preventDefault();
    var twelvePM = taskTxt12.value
    localStorage.setItem("twelvePM", twelvePM);
})
var planner12get = localStorage.getItem("twelvePM");
taskTxt12.textContent = planner12get;

// 1230 PM
var task1230 = document.getElementById("btn1230");
var taskTxt1230 = document.getElementById("task1230");
task1230.addEventListener("click", function(event){
    event.preventDefault();
    var twelveThirtyPM = taskTxt1230.value
    localStorage.setItem("twelveThirtyPM", twelveThirtyPM);
})
var planner1230get = localStorage.getItem("twelveThirtyPM");
taskTxt1230.textContent = planner1230get;

// 1 PM
var task1 = document.getElementById("btn1");
var taskTxt1 = document.getElementById("task1");
task11.addEventListener("click", function(event){
    event.preventDefault();
    var onePM = taskTxt1.value
    localStorage.setItem("onePM", onePM);
})
var planner1get = localStorage.getItem("onePM");
taskTxt1.textContent = planner1get;

// 130 PM
var task130 = document.getElementById("btn130");
var taskTxt130 = document.getElementById("task130");
task130.addEventListener("click", function(event){
    event.preventDefault();
    var oneThirtyPM = taskTxt130.value
    localStorage.setItem("oneThirtyPM", oneThirtyPM);
})
var planner130get = localStorage.getItem("oneThirtyPM");
taskTxt130.textContent = planner130get;

// 2 PM
var task2 = document.getElementById("btn2");
var taskTxt2 = document.getElementById("task2");
task2.addEventListener("click", function(event){
    event.preventDefault();
    var twoPM = taskTxt2.value
    localStorage.setItem("twoPM", twoPM);
})
var planner2get = localStorage.getItem("twoPM");
taskTxt2.textContent = planner2get;

// 230 PM
var task230 = document.getElementById("btn230");
var taskTxt230 = document.getElementById("task230");
task230.addEventListener("click", function(event){
    event.preventDefault();
    var twoThirtyPM = taskTxt230.value
    localStorage.setItem("twoThirtyPM", twoThirtyPM);
})
var planner230get = localStorage.getItem("twoThirtyPM");
taskTxt230.textContent = planner230get;

// 3 PM
var task3 = document.getElementById("btn3");
var taskTxt3 = document.getElementById("task3");
task3.addEventListener("click", function(event){
    event.preventDefault();
    var threePM = taskTxt3.value
    localStorage.setItem("threePM", threePM);
})
var planner3get = localStorage.getItem("threePM");
taskTxt3.textContent = planner3get;

// 330 PM
var task330 = document.getElementById("btn330");
var taskTxt130 = document.getElementById("task330");
task330.addEventListener("click", function(event){
    event.preventDefault();
    var threeThirtyPM = taskTxt330.value
    localStorage.setItem("threeThirtyPM", threeThirtyPM);
})
var planner330get = localStorage.getItem("threeThirtyPM");
taskTxt330.textContent = planner330get;

// 4 PM
var task4 = document.getElementById("btn4");
var taskTxt4 = document.getElementById("task4");
task4.addEventListener("click", function(event){
    event.preventDefault();
    var fourPM = taskTxt4.value
    localStorage.setItem("fourPM", fourPM);
})
var planner4get = localStorage.getItem("fourPM");
taskTxt4.textContent = planner4get;

// 430 PM
var task430 = document.getElementById("btn430");
var taskTxt430 = document.getElementById("task430");
task430.addEventListener("click", function(event){
    event.preventDefault();
    var fourThirtyPM = taskTxt430.value
    localStorage.setItem("fourThirtyPM", fourThirtyPM);
})
var planner430get = localStorage.getItem("fourThirtyPM");
taskTxt430.textContent = planner430get;

// 5 PM
var task5 = doctument.getElementById("btn5");
var taskTxt5 = document.getElementById("task5");
task5.addEventListener("click", function(event){
    event.preventDefault();
    var fivePM = taskTxt5.value
    localStorage.setItem("fivePM", fivePM);
})
var planner5get = localStorage.getItem("fivePM");
taskTxt5.textContent = planner5get;


//Targets each time block to grab each ID
//sorts each ID into THIS and a variable
//parsInt turns to a string to compare numbers to numbers
$(".time-block").each(function(){
    var timeID =+ ($(this).attr("id"));
    var hourBlock = parsInt(timeID,("-")[1])

//color/class based off comparing times    
    if(currentHour > hourBlock){
        $(this).addClass("past")
    } else if (currentHour === hourBlock){
        $(this).addClass("present")
    }else if (currentHour < hourBlock){
        $(this).addClass("future")
    }
})