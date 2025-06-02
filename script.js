const datediv = document.getElementById("datediv")
const timediv = document.getElementById("timediv")


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

