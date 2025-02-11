let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');


function displayTime(){
  let date = new Date();
  // geeting hr,min, sec frm date
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();


//12hr = 360deg
//1hr = 30deg
// h hr = 30h+m/2

//60min = 360deg
//1m = 6deg
// m min = 1/2m 0r 6m

//60sec = 360deg
//1sec = 6deg
// s sec = 1/2s 0r 6sec

  let hRotation = 30*hh + mm/2;
  let mRotation = 6*mm;
  let sRotation = 6*ss;


hr.style.transform = `rotate(${hRotation}deg)`;
min.style.transform = `rotate(${mRotation}deg)`;
sec.style.transform = `rotate(${sRotation}deg)`;
};


setInterval(displayTime, 1000);