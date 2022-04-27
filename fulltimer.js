// Idle display titles
var titles = ["FING", "FING", "OBSL", "OBSL", "SIGN", "SIGN", "FRYS", "FRYS"];

// flowchart variables
// VERY IMPORTANT
var idles = Array(8).fill(true);
var dones = Array(8).fill(true);

// seconds to cook each
// var s2c = [240, 240, 0, 0, 360, 360, 270, 270];
var s2c = Array(8).fill(5);
// keep track of how long the food has been cooking
var cnt = Array(8).fill(0);

// amount of seconds until minute digit changes
var sec_per_min = 2;

// intervals
var tickers = Array(8).fill(null);
var counters = Array(8).fill(null);
var checkers = Array(8).fill(null);
var blinkers = Array(8).fill(null);


// Set text to DONE and flash that dude
function startBlinking(i)
{
  // famous annoying thing to see blinking in green
  $("#p" + (i + 1)).text("DONE");
  blinkers[i] = setInterval(function() {
    $("#p" + (i + 1)).toggle();
  }, 200);
}

$(document).ready(function()
{ 

  $("button").click(function(){
    // get id from buttons "btn#"
    var i = parseInt($(this).attr("id").charAt(3)) - 1;

    if (i >= 2 && i <= 3)
    {
      return;
    }
    // flowchart
    if (idles[i] == true)
    {
      // start cooking
      cnt[i] = s2c[i];
      // decrease count variable (in seconds)
      counters[i] = setInterval(function() {
        cnt[i] --;
        if (cnt[i] <= 0)
        {
          dones[i] = true;
          clearInterval(counters[i]);
        }
      }, 1000);
      // keep updating display
      // https://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss
      tickers[i] = setInterval(function() {
        var date = new Date(0);
        date.setSeconds(cnt[i]);
        var timeString = date.toISOString().substr(14, 5);
        $("#p" + (i+1)).text(timeString);
      }, 50);
      checkers[i] = setInterval(function() {
        if (cnt[i] <= 0)
          {
           
            // stop counting variables
            // clearInterval(counters[i]);
            // stop ticking, we'll toggle in the blinker instead
            clearInterval(tickers[i]);
            // stop checking
            clearInterval(checkers[i]);
            idle = false;
            done = true;
            startBlinking(i);
          }
      }, 1000);
      // flow
      idles[i] = false;
      dones[i] = false;
    }
    else
    {
      if (dones[i] == false)
      {
        // ignore
      }
      else
      {
        // restart / "toidle"
        clearInterval(blinkers[i]);
        $("#p" + (i + 1)).show();
        $("#p" + (i + 1)).text(titles[i]);
        idles[i] = true;
        dones[i] = true;
      }
    }

  });

});
