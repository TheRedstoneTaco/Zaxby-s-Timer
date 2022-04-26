// if food is cooked (when started and executed properly)
var done = false;
// to toggle the timer's blinking action
var visible = true;
// how many seconds it takes the food to cook
var secondsToCook = 5;
// keep track of how long the food has been cooking
var count = 0;
// amount of seconds until minute digit changes
var sec_per_min = 2;

// intervals
var updater;
var counter;
var checker;
var blinker;

function startBlinking()
{
  // famous annoying thing to see blinking in green
  $("#clock p").text("DONE");
  // 
  blinker = setInterval(function() {
    $("#clock p").toggle();
  }, 500);
}

$(document).ready(function()
{
  
  // keep updating display
  updater = setInterval(function() {
    var formatted = count;
    $("#clock p").text(formatted);
  }, 50);
  
  // increase count variable (in seconds)
  counter = setInterval(function() {
    count ++;
  }, 1000);
  
  checker = setInterval(function() {
    if (count >= secondsToCook)
      {
        done = true;
        // stop counting
        clearInterval(counter);
        // start blinking
        startBlinking();
        // stop updating, we'll do that in the blinker
        clearInterval(updater);
        // stop checking
        clearInterval(checker);
      }
  }, 50);
  
/**
  
  // a = setInterval(function()
                 {
    
    if (done == false)
      {
        seconds ++;
      }
    if ((seconds >= doneLimit) && (done == false))
      {
        done = true;
        blink();
      }
   // }, 500);
  */
});
