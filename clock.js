function showTime() {
    var d = new Date();
    var h;
    var m;
    var s;
    var session;
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    session = "AM";
    session = session < 12 ? "AM" : "PM";
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    var time = h + ":" + m + ":" + s + ":" + session;
    document.getElementsByTagName('h1')[0].innerText = time;
    setTimeout(showTime, 1000);
}
