setInterval(() => {
    let time = new Date();
    let hTime = time.getHours();
    let mTime = time.getMinutes();
    let sTime = time.getSeconds();
    hrRotation = 30*hTime + mTime/2;
    minRotation = 6*mTime;
    secRotation = 6*sTime;

    hr.style.transform = `rotate(${hrRotation}deg)`;
    min.style.transform = `rotate(${minRotation}deg)`;
    sec.style.transform = `rotate(${secRotation}deg)`;

}, 1000);