function realTimeClock() {

    var clocks = new Date();

    var monthDesc = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    var daysDesc = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Juma&#39;at', 'Sabtu'];

    var days = clocks.getDay();
    var dates = clocks.getDate();
    var months = clocks.getMonth();
    var years = clocks.getFullYear();

    monthDesc = monthDesc[months];
    daysDesc = daysDesc[days];

    var hours = clocks.getHours();
    var minutes = clocks.getMinutes();
    var seconds = clocks.getSeconds();

    dates = ("0" + dates).slice(-2);
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('date').innerHTML = daysDesc + ", " + dates + " " + monthDesc + " " + years;
    document.getElementById('time').innerHTML = hours + " : " + minutes + " : " + seconds;
    var setTime = setTimeout(realTimeClock, 500);
}