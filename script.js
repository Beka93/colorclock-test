function colorClock() {
var date = new Date();

var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

// ha
// a 'seconds', 'minutes', és 'hours' változó kisebb, mint 10
// legyen előtte a szöveggé konvertáláskor egy nulla
if (seconds < 10) {
    seconds = '0' + seconds;
  }
if (minutes < 10) {
    minutes = '0' + minutes;
}
if (hours < 10) {
    hours = '0' + hours;
}

var clockFace = hours + ':' + minutes + ':' + seconds;
var hexColor = '#' + minutes + hours + seconds;

document.getElementById('clock').innerHTML = clockFace;
document.body.style.background = hexColor;


setTimeout(function() {
    colorClock();
  }, 1000);

}

colorClock();