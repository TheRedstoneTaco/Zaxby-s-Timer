// how many seconds it takes the food to cook
var secondsToCook = 20;
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

/**
class Time
  {
    constructor(hour, minute, second)
    {
      this.hour = hour;
      this.minute = minute;
      this.second = second;
    }
  }
var timers = [-1, -1, -1, -1, -1, -1, -1, -1];
var limits = [240, 240, 1, 1, 360, 360, 270, 270];

var clockIDs = ["fingers_1", "fingers_2"];

for (var i = 0; i < 8; i++)
{
  
}

function blink(i)
{
  
}

var countingInterval;

$(document).ready(function()
{
  for (var i = 0; i < 8; i++)
    {
      $(".col-9").attr("blinking", "on");
    }
  $("button").click(function()
  {
    var whichID = parseInt($(this).attr("id").slice(-1), 10);
    timers[whichID] = 0;
  });
  
  countingInterval = setInterval(function() {
    for (var i = 0; i < timers.length; i++)
      {
        if (timers[i] >= 0)
          {
            timers[i] = timers[i] + 1;
          }
        if (timers[i] >= limits[i])
          {
            blink(i);
            timers[i] = 0;
          }
      }
  }, 1000);

  $(".col-9").text("00:00");
});

**/
/**
<div id="text" class="text-center">
  Clockinator West 1.0
</div>

<div class="container">
  
  <div class="row align-items-center">
    <div class="col">
      <div class="row">
        <div class="col col-3">
          <div class="hitme" id="time_1">Time</div>
        </div>
        <div class="col col-9" id="fingers_1">
          Fingers 1
        </div>
      </div>
    </div>
    <div class="col">
      <div class="row">
        <div class="col col-3">
          <button type="button" class="btn btn-sm btn-primary" id="time_2">Time</button>
        </div>
        <div class="col col-9" id="fingers_2">
          Fingers 2
        </div>
      </div>
    </div>
    <div class="col">
      <div class="row">
        <div class="col col-3">
          <button type="button" class="btn btn-sm btn-primary" id="time_3">Time</button>
        </div>
        <div class="col col-9" id="unknown_1">
          UNKNOWN
        </div>
      </div>
    </div>
    <div class="col">
      <div class="row">
        <div class="col col-3">
          <button type="button" class="btn btn-sm btn-primary" id="time_4">Time</button>
        </div>
        <div class="col col-9" id="unknown_2">
          UNKNOWN
        </div>
      </div>
    </div>
  </div>
  
  <div class="row align-items-center">
    <div class="col">
      <div class="row">
        <div class="col col-3">
          <button type="button" class="btn btn-sm btn-primary" id="time_5">Time</button>
        </div>
        <div class="col col-9" id="fingers_1">
          Signatures 1
        </div>
      </div>
    </div>
    <div class="col">
      <div class="row">
        <div class="col col-3">
          <button type="button" class="btn btn-sm btn-primary" id="time_6">Time</button>
        </div>
        <div class="col col-9" id="signatures_2">
          Signatures 2
        </div>
      </div>
    </div>
    <div class="col">
      <div class="row">
        <div class="col col-3">
          <button type="button" class="btn btn-sm btn-primary" id="time_7">Time</button>
        </div>
        <div class="col col-9" id="fries_1">
          Fries 1
        </div>
      </div>
    </div>
    <div class="col">
      <div class="row">
        <div class="col col-3">
          <button type="button" class="btn btn-sm btn-primary" id="time_8">Time</button>
        </div>
        <div class="col col-9" id="fries_2">
          Fries 2
        </div>
      </div>
    </div>
  </div>
  
</div>
**/
