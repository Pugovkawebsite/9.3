'use strict';

let nowDate = new Date(); /* текущая дата */

let nowHours;
let nowMinutes;
let nowSecond
let dayWeek = nowDate.getDay(); /* текущий день недели */
let htmlDate = document.querySelector('.time__number');
let actualTime;

console.log(nowDate);




function showTime() {
nowDate = new Date();
nowHours = nowDate.getHours();
nowMinutes = nowDate.getMinutes();
nowSecond = nowDate.getSeconds();
    // if (nowHours < 10) {
    //     htmlDate.innerHTML = '0' + nowHours + ':' + nowMinutes + ':' + nowSecond;
    // } else if (nowMinutes < 10) {
    //     htmlDate.innerHTML = nowHours + ':' + '0' + nowMinutes + ':' + nowSecond;
    // } else {
    //     htmlDate.innerHTML = nowHours + ':' + nowMinutes + ':' + nowSecond;
    // }
    function numClock (num) {
        if (num >= 0 && num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

let h = numClock(nowHours);
let min = numClock(nowMinutes);
let sec = numClock(nowSecond);
// console.log(h);
// console.log(min);
// console.log(sec);
    // numClock(nowHours, nowMinutes, nowSecond);
    htmlDate.innerHTML = h + ':' + min /* + ':' + sec */;
}


function clockStart() { // запустить часы
    actualTime = setInterval(showTime, 1000);
    showTime(); // (*)
}
clockStart();
// let actualTime = setInterval(showTime, 500);

// console.log(nowDate);
// console.log(nowHours);
// console.log(nowMinutes);
// console.log(dayWeek);

// nowDate.console.dir();
// console.log(nowDate.getTimezoneOffset());

let nowDateTimes = Date.parse(nowDate); /* таймстемп текущей даты */

let a = nowDate.getFullYear(); /* получаем значение текущего года */
let b = new Date(`01.01.${a}`);
let dayWeekStart = b.getDay();
let c = Date.parse(b); /* таймстемп на 01.01. текущего года */

console.log(a);
console.log(b);
console.log(c);
console.log(nowDateTimes);

let daysWithNewYear = Math.floor((nowDateTimes - c) / (1000 * 60 * 60 * 24)); /* !!!!вывести на страницу - колличество дней*/
console.log(daysWithNewYear);



let calcWeek = 0;



/* dayWeek  daysWithNewYear  dayWeekStart */

function calcDaySmall7 (elem) {
    if (dayWeekStart !== 1) {
        calcWeek += 1;
        if (dayWeek !== 0) {
            calcWeek += 1;
        }
        if (dayWeekStart == 6 || dayWeekStart == 7) {
            calcWeek += -1;
        }
    }
    return calcWeek;
}

function calcDay () {
if ((daysWithNewYear % 7) == 0) {
    calcWeek += daysWithNewYear / 7;
} else {
    calcWeek += Math.floor(daysWithNewYear / 7);
    let n = daysWithNewYear % 7;
    calcDaySmall7 (n);
    console.log(calcWeek); /* количество недель */
}
}

calcDay ();

console.log(calcWeek);

// console.log(nowDate.DateTimeFormat().resolvedOptions().timeZone);

let timeZone = new Intl.DateTimeFormat("en-US", {
    timeZoneName: "long"
    // timeZoneName: "short"
});

let dateStr = timeZone.format(nowDate);
let arrDat = dateStr.split(',')
console.log(arrDat);

// вывести на страницу числа
let timeZoneShow = document.querySelector('#timezone');
let dayWidthNewYearPlace = document.querySelector('#dayWidthNewYearPlace');
let dayOfWeek = document.querySelector('#dayOfWeek');
let numberWeek = document.querySelector('#numberWeek');
function showNumber () {
    timeZoneShow.innerHTML = arrDat[1];
    dayWidthNewYearPlace.innerHTML = daysWithNewYear;
    dayOfWeek.innerHTML = dayWeek;
    numberWeek.innerHTML = calcWeek;
}
showNumber ();

/* open "More" */

let mainButton = document.querySelector('.main-button');
let textButton = document.querySelectorAll('main-button__text');
let circleButton = document.querySelector('.main-button__circle');
let buttonClose = document.querySelector('#buttonClose');
let buttonOpen = document.querySelector('#buttonOpen');
let activeWindow = document.querySelector('.window__active');
let citationBlock = document.querySelector('.citation-block');

function openWindow () {
    circleButton.classList.add('main-button__circle__active');
    buttonClose.classList.add('text__close');
    buttonOpen.classList.remove('text__close');
    activeWindow.classList.remove('window__active__hidden');
    citationBlock.classList.add('citation-block__none');
}

function closeWindow () {
    circleButton.classList.remove('main-button__circle__active');
    buttonClose.classList.remove('text__close');
    buttonOpen.classList.add('text__close');
    activeWindow.classList.add('window__active__hidden');
    citationBlock.classList.remove('citation-block__none');
}

mainButton.addEventListener('click', function () {
    if (!buttonOpen.classList.contains('text__close')) {
        closeWindow ();
    } else {
        openWindow ();
    }


})
/*  */

/* citation */

let citationArr = [
    {'Ludwig Josef Johann Wittgenstein': 'The limits of my language are the limits of my world.'},
    {"Francis Bacon": "Knowledge is power."},
    {"Mahatma Gandhi": 'Live as if you were to die tomorrow. Learn as if you were to live forever.'},
    {'Sir Charles Galton Darwin': "It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change."},
    {'Farrah Gray': 'Build your own dreams, or someone else will hire you to build theirs.'},
    {'Albert Einstein': 'Logic will get you from A to B. Imagination will take you anywhere.'},
    {'Confucius': 'I hear and I forget. I see and I remember. I do and I understand.'},
    {'Voltaire': 'If God did not exist, it would be necessary to invent him.'},
    {'Galileo Galilei': 'All truths are easy to understand once they are discovered; the point is to discover them.'},
    {'Stephen King': "You learn best by reading a lot and writing a lot, and the most valuable lessons of all are the ones you teach yourself."}
]
function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
}

let n;
// console.log(typeof(n));

let clickButton = document.querySelector('.citation-block__img');
let citationText = document.querySelector('.citation-block__text');
let citationAuthor = document.querySelector('.citation-block__autor');

clickButton.addEventListener('click', function () {
    n = get_random(citationArr);
    // console.log(Object.keys(n));
    // console.log(Object.values(n));
    citationText.innerHTML = Object.values(n);
    citationAuthor.innerHTML = Object.keys(n);
})

console.log(nowHours);

let showWelcome = document.querySelector('#welcom');
let mainPicture = document.querySelector('.main');
let windowActive = document.querySelector('.window__active');
let titleStyle = document.querySelectorAll('.title');
let numberStyle = document.querySelectorAll('.number');
let showIcon = document.querySelector('.time__icon');

function dayColor () {
    titleStyle.forEach(element => {
        element.classList.add('title__forest');
        element.classList.remove('title__night');
    });
    numberStyle.forEach(e => {
        e.classList.add('number__forest');
        e.classList.remove('number__night');
    });
}

function nightColor () {
    titleStyle.forEach(element => {
        element.classList.remove('title__forest');
        element.classList.add('title__night');
    });
    numberStyle.forEach(e => {
        e.classList.remove('number__forest');
        e.classList.add('number__night');
    });
}
function dayPicture () {
    mainPicture.classList.add('main-forest');
    mainPicture.classList.remove('main-night');
    windowActive.classList.add('window__active__forest');
    windowActive.classList.remove('window__active__night');
    showIcon.classList.add('time__icon-sun');
    showIcon.classList.remove('time__icon-moon');
}
function nightPicture () {
    mainPicture.classList.remove('main-forest');
    mainPicture.classList.add('main-night');
    windowActive.classList.add('window__active__night');
    windowActive.classList.remove('window__active__forest');
    showIcon.classList.remove('time__icon-sun');
    showIcon.classList.add('time__icon-moon');
}


// if ((nowHours >= 10) && (nowHours < 16)) {
//     showWelcome.innerHTML = 'GOOD DAY';
//     dayPicture ();
//     dayColor ();
// } else if ((nowHours >= 16) && (nowHours < 22)) {
//     showWelcome.innerHTML = 'GOOD EVENING';
//     nightPicture ();
//     nightColor ();
// } else if ((nowHours >= 22) && (nowHours < 24)) {
//     showWelcome.innerHTML = 'GOOD NIGHT';
//     nightPicture ();
//     nightColor ();
// } else if ((nowHours >= 0) && (nowHours < 6)) {
//     showWelcome.innerHTML = 'GOOD NIGHT';
//     nightPicture ();
//     nightColor ();
// } else {
//     showWelcome.innerHTML = 'GOOD MORNING';
//     dayPicture ();
//     dayColor ();
// };

switch(nowHours) {
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
        showWelcome.innerHTML = 'GOOD DAY';
        dayPicture ();
        dayColor ();
        break;
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
        showWelcome.innerHTML = 'GOOD EVENING';
        nightPicture ();
        nightColor ();
        break;
    case 22:
    case 23:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        showWelcome.innerHTML = 'GOOD NIGHT';
        nightPicture ();
        nightColor ();
        break;
    default:
        showWelcome.innerHTML = 'GOOD MORNING';
        dayPicture ();
        dayColor ();
};

// показать на странице сокращенное значение timeZone:

let timeZone2 = new Intl.DateTimeFormat("en-US", {
    timeZoneName: "short"
});

let arrShortDate = (timeZone2.format(nowDate)).split(',');
console.log(arrShortDate[1]);

let shortTimeZone = document.querySelector('.time__utc');

shortTimeZone.innerHTML = arrShortDate[1];


