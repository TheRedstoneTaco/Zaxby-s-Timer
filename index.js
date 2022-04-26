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
  clearInterval(blinker);
  blinker = setInterval(function() {
    $("#clock p").toggle();
  }, 500);
}

$(document).ready(function()
{
  $("button").click(function()
  {
    if (count > 0)
      {
        return;
      }
    clearInterval(blinker);
    $("#clock p").show();
    init();
  });
  init();
});

function init()
{
  
  count = secondsToCook;
  
  // increase count variable (in seconds)
  counter = setInterval(function() {
    count --;
  }, 1000);
  
  // keep updating display
  updater = setInterval(function() {
    var formatted = count + "";
    $("#clock p").text(formatted);
  }, 50);
  
  checker = setInterval(function() {
    if (count <= 0)
      {
        // done = true;
        // stop counting
        clearInterval(counter);
        // stop updating, we'll do that in the blinker
        clearInterval(updater);
        // stop checking
        clearInterval(checker);
        // start blinking
        startBlinking();
      }
  }, 50);
}
