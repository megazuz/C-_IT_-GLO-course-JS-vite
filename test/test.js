'use strict';
const page = document.body;
const dayPeriodsRU = ['Доброй ночи', 'Доброе утро', 'Добрый день', 'Добрый вечер'];
const weekDayRU = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const timeNow = new Date();

const nextNY = new Date('1 january ' + (timeNow.getFullYear() + 1));

page.innerHTML = `<p>${dayPeriodsRU[Math.floor(timeNow.getHours() / 6)]}<p>

<p>Сегодня: ${weekDayRU[timeNow.getDay()]}</p>

<p>Текущее время: ${timeNow.toTimeString().substring(0, 8)}</p>

<p>До нового года осталось ${Math.floor((nextNY - timeNow) / 86400000)} дней</p>`;
