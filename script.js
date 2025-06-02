const datediv = document.getElementById("datediv")
const timediv = document.getElementById("timediv")
const secStick = document.getElementById("secStick")
const minStick = document.getElementById("minStick")
const hourStick = document.getElementById("hourStick")



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

function updatesec(){
    let now = new Date();

    
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    secStick.style.rotate = `${sec*6}deg`;
    minStick.style.rotate = `${min*6}deg`;
    hourStick.style.rotate = `${hour*6}deg`;


}
setInterval(updatesec, 1000)

// function updatemin(){
    let now = new Date();

    let fuck = 30;

    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    minStick.style.rotate = `${fuck}deg`;


// }
// setInterval(updatemin, 60000)

let x = 124;

if (x < 13){
    console.log("fuck you")
}
else(
    console.log("fuck me")
)