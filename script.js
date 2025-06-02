const datediv = document.getElementById("datediv")


function updatetime(){
    let now = new Date();

    let year = now.getFullYear();
    let month = now.getMonth();

    datediv.innerHTML = typeof(now);


    // let hour = now.getHours();
    // let min  = now.getMinutes();
    // let sec = now.getSeconds();

    // let currentTime = hour, min, sec;



}

setInterval(updatetime, 1000);

