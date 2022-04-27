var idle = true;
var done = false;

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
  blinker = setInterval(function() {
    $("#clock p").toggle();
  }, 200);
}

$(document).ready(function()
{
  
  $("p").text("FING");
  
  $("button").click(function()
  {
    
    if (idle == true)
    {
      // start cooking
      counter = secondsToCook;
      // decrease count variable (in seconds)
      counter = setInterval(function() {
        count --;
        if (count <= 0)
        {
          done = true;
        }
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
            idle = false;
            done = true;
            startBlinking();
          }
      }, 1000);
      // flow
      idle = false;
      done = false;
    }
    else
    {
      if (done == false)
      {
        // ignore
      }
      else
      {
        // restart / "toidle"
        clearInterval(blinker);
        $("#clock p").show();
        $("p").text("FING");
        idle = true;
        done = true;
      }
    }
    
  });
  
});

