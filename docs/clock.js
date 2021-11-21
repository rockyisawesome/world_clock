
let d;
let t;

const options = {weekday:'short', year: 'numeric', month: 'short', day: 'numeric'};

setInterval(() => {
let samay = new Date();


t = document.getElementById('time');
t.innerHTML = samay.toLocaleTimeString();
d = document.getElementById('date');
d.innerHTML = samay.toLocaleDateString(undefined, options);
}, 1000);

// timeChangeKaro = ()=>{
//     let t = document.getElementById('time');
//     t.innerHTML = samay.toLocaleTimeString();
// }

// setInterval(timeChangeKaro, 2000);


