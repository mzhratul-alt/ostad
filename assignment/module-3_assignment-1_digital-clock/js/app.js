let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");
let am_pm = document.getElementById("am_pm");

setInterval(() => {
    let currentTime = new Date();
  let currentHours = currentTime.getHours();
  let currentMins = currentTime.getMinutes();
  let currentSecs = currentTime.getSeconds();

  if (currentHours > 12) {
    hours.innerText =
      (currentHours - 12) < 10 ? `0${currentHours - 12}` : currentHours;
  } else {
    hours.innerText = currentHours < 10 ? `0${currentHours}` : currentHours;
  }
  mins.innerText = currentMins < 10 ? `0${currentMins}` : currentMins;
  secs.innerText = currentSecs < 10 ? `0${currentSecs}` : currentSecs;
  am_pm.innerText = currentHours >= 12 ? "PM" : "AM";
}, 1000);

console.log(new Date());
