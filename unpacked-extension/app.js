var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthnames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function $(query) {
    return document.querySelectorAll(query)[0];
}

function init() {
    updateTimes();
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
