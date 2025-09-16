const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

// Set the target date and time (25 days, 10 hours, 52 minutes from now)
const now = new Date().getTime();
const targetDate = now + (25 * 24 * 60 * 60 * 1000) + (10 * 60 * 60 * 1000) + (52 * 60 * 1000);

const timeFunction = setInterval(() => {
  // Get the current date and time
  const currentDate = new Date().getTime();

  // Find the time remaining between the current time and the target date
  const timeRemaining = targetDate - currentDate;

  if (timeRemaining <= 0) {
    clearInterval(timeFunction);
    // You can add some message or action when the countdown expires
    return;
  }

  // Time calculations for days, hours, minutes, and seconds
  const secondsRemaining = Math.floor((timeRemaining / 1000) % 60);
  const minutesRemaining = Math.floor((timeRemaining / (1000 * 60)) % 60);
  const hoursRemaining = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  // Update the HTML elements with the remaining time
  seconds.textContent =
    secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining;
  minutes.textContent =
    minutesRemaining < 10 ? `0${minutesRemaining}` : minutesRemaining;
  hours.textContent =
    hoursRemaining < 10 ? `0${hoursRemaining}` : hoursRemaining;
  days.textContent = daysRemaining < 10 ? `0${daysRemaining}` : daysRemaining;
}, 1000);
