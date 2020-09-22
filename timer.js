window.getTimeRemaining = function (deadline) {
    var t = Date.parse(deadline) - (new Date()).getTime();
    // console.log(t);
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

window.initializeClock = function (clockdiv, myDate) {
    var clock = document.getElementById(clockdiv);
    var deadline = document.getElementById(myDate).value;
    var timeinterval = setInterval(function () {
        var t = getTimeRemaining(deadline);
        clock.innerHTML = 'days: ' + t.days + '<br>' + 'hours: ' + t.hours + '<br>' + 'minutes: ' + t.minutes + '<br>' + 'seconds: ' + t.seconds;
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }, 1000);
}