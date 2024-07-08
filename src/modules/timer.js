'use strict';
export const timer = (deadline) => {
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');
  let dateStop = new Date(deadline).getTime();
  let dateNow = new Date().getTime();

  const getTimeRemaining = () => {
    dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 3600);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);
    return { timeRemaining, hours, minutes, seconds };
  };
  const updateClock = () => {
    let getTime = getTimeRemaining();
    timerHours.textContent = getTime.hours < 10 ? `0${getTime.hours}` : getTime.hours;
    timerMinutes.textContent = getTime.minutes < 10 ? `0${getTime.minutes}` : getTime.minutes;
    timerSeconds.textContent = getTime.seconds < 10 ? `0${getTime.seconds}` : getTime.seconds;
    if (getTime.timeRemaining > 0) {
      setInterval(updateClock, 1000);
    }
  };

  dateNow < dateStop ? updateClock() : {};
};
