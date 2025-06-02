const datediv = document.getElementById("datediv")
const timediv = document.getElementById("timediv")
const secStick = document.getElementById("secStick")



function updatetime(){
    let now = new Date();

    let dateonly = now.toDateString();
    datediv.innerHTML = dateonly;

    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    timediv.innerHTML = `${hour} : ${min} : ${sec}`;
}
setInterval(updatetime, 1000);


let secstickvalue = 0;

function updatesec(){
    let now = new Date();

    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    secStick.style.rotate = `${sec*6}deg`;

}
setInterval(updatesec, 1000)

