var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthnames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var quotes = ['No rain, No flowers', 'Different doesn\'t mean wrong!', 'Be a voice, not an echo', 'Every moment matters', 'Think like a proton. Always positive.',
              'Escape the ordinary!', 'Get shit done!', 'Prove them wrong!', 'Do epic shit!', '... And so the adventure begins!', 'Start somewhere.', 'Don\'t stop until you\'re proud',
              'Impossible is just an opinion', 'If you never try, you never know', 'Calm is a superpower!', 'The story isn\'t over yet.', 'Choose happy', 'Move fast and break things!']

function $(query) {
    return document.querySelectorAll(query)[0];
}

function init() {
    setQuote();
    updateTimes();
}

function setQuote() {
    var quoteDiv, randomQuote;

    quoteDiv = document.querySelector('.quote');
    quoteDiv.innerHTML = '"' + quotes[Math.floor(Math.random() * quotes.length)] + '"'
}

function updateTimes() {
    var now, suffex, hours, offset, times, minutes, seconds, time, dayName, day, month, year, date;

    times = document.querySelectorAll('.time');

    for (var i = 0, len = times.length; i < len; i++ ) {
        offset = times[i].getAttribute('data-utc-offset');

        now = timeFromUtcOffset(offset)
        hours = now.getHours();
        minutes = now.getMinutes();
        seconds = now.getSeconds();

        if (minutes <= 9) minutes = '0' + minutes;
        if (seconds <= 9) seconds = '0' + seconds;

        time = hours + ':' + minutes + ':' + seconds;
        times[i].innerHTML = time;
    }

    setTimeout(function(){
        updateTimes();
    }, 1000);
}

function timeFromUtcOffset(offset) {
    var date, utc, new_date;

    date = new Date();
    utc = date.getTime() + (date.getTimezoneOffset() * 60000);

    return new Date(utc + (3600000*offset));
}

init();
