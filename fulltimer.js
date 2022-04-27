
// TODO: Implement Obsolote Timer Ignoring

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
var updaters = Array(8).fill(null);
var counters = Array(8).fill(null);
var checkers = Array(8).fill(null);
var blinkers = Array(8).fill(null);


// Set text to DONE and flash that dude
function startBlinking(id)
{
  $($(".col-3 p")[id])
  // famous annoying thing to see blinking in green
  .text("DONE");
  blinkers[id] = setInterval(function() {
    $($(".col-3")[id]).toggle();
  }, 200);
}

$(document).ready(function()
{

  $("button").click(function(){
    // get id from buttons "btn#"
    var i = parseInt($(this).attr("id").slice(-1)) - 1;

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
        }
      }, 1000);
      // keep updating display
      updaters[i] = setInterval(function() {
        var formatted = cnt[i] + "";
        $($(".col-3")[i]).text(formatted);
      }, 50);
      checkers[i] = setInterval(function() {
        if (cnt[i] <= 0)
          {
            // done = true;
            // stop counting
            clearInterval(counters[i]);
            // stop updating, we'll do that in the blinker
            clearInterval(updaters[i]);
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
        $($(".col-3")[i]).show();
        $($(".col-3")[i]).find("p").text("FING");
        idles[i] = true;
        dones[i] = true;
      }
    }

  });

});
