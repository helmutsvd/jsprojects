function updateTime() {
    const hrs = document.querySelector('.hours');
    const min = document.querySelector('.minutes');
    const sec = document.querySelector('.seconds');
    const dayMoment = document.querySelector('.dayMoment');

    const date = new Date();

    hrs.innerText = Math.abs(date.getHours() - 12);
    min.innerText = date.getMinutes();
    sec.innerText = date.getSeconds();
    if (hrs < 12) {
        dayMoment.innerText = 'AM';
    } else {
        dayMoment.innerText = 'PM';
    }
}


(function main() {
    setInterval(updateTime, 1000);
})();

