var blinkInterval = setInterval(function() {}, 1000);
var done = false;

var visible = true;

function blink()
{
  $("#clock p").text("");
  clearInterval(blinkInterval);
  blinkInterval = setInterval(function() {
    $("#clock p").toggle();
    visible = !visible;
  }, 250);
}

$(document).ready(function()
{
  var secondsToCook = 5;
  
  var scooking = 0;
  var secPerMin = 2;
  a = setInterval(function()
                 {
    var formatted = "" + Math.floor(seconds / secPerMin) + ":" + (seconds % secPerMin);
    $("#clock p").text(formatted);
    
    if (done == false)
      {
        seconds ++;
      }
    if ((seconds >= doneLimit) && (done == false))
      {
        done = true;
        blink();
      }
  }, 500);
});
