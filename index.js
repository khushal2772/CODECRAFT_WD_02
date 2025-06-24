let [ hour, minute, second, milisecond]= [0,0,0,0];
function stopwatch() {
    milisecond++;
    if (milisecond===100) {
        milisecond=0;
        second++;
            if (second===60) {
            second=0;
            minute++;
                if (minute===60) {
                minute=0;
                hour++;
                    if (hour===24) {
                    hour=0;
                };
            };
        };
    };
}

function start() {
    timer = setInterval(() => {
    stopwatch()
    console.log(`${hour}:${minute}:${second}:${milisecond}`);
    }, 10);
}
function stop() {
    clearInterval(timer)
}
function reset() {
    hour=minute=second=milisecond=0;
}
function lap() {
    const laptime = (`${hour}:${minute}:${second}:${milisecond}`)
    console.log(laptime);
    
}