// TIME
function updateTime() {
    let d = new Date();
    let time = document.getElementById('time');
    let currentTime = d.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    time.innerHTML = currentTime;
};

setInterval(updateTime, 1000);

// POWER
let power = document.getElementById('power');

navigator.getBattery().then(function (battery) {
    let level = battery.level;
    let currentPower = (level * 100) + "%";
    power.innerHTML = currentPower;
});
