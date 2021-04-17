async function getJadwalSholat() {

    var clocks = new Date();

    var dates = clocks.getDate();
    var months = clocks.getMonth()+1;
    var years = clocks.getFullYear();

    months = ("0" + months).slice(-2);
    dates = ("0" + dates).slice(-2);

    var days = years + "-" + months + "-" + dates

    var api_url = 'https://api.banghasan.com/sholat/format/json/jadwal/kota/667/tanggal/' + days;
    const response = await fetch(api_url);
    const data = await response.json();
    var jadwal = data.jadwal.data;
    const {subuh, ashar, dzuhur, isya, maghrib, imsak} = jadwal;
                
    document.getElementById('subuh').innerHTML = subuh + ' WIB';
    document.getElementById('ashar').innerHTML = ashar + ' WIB';
    document.getElementById('dzuhur').innerHTML = dzuhur + ' WIB';
    document.getElementById('isya').innerHTML = isya + ' WIB';
    document.getElementById('maghrib').innerHTML = maghrib + ' WIB';
    document.getElementById('imsak').innerHTML = imsak + ' WIB';
}