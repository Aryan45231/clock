let min = 0;
let sec = 0;
let s_min = 15;
let b_min = 5
let sesion_count = 1;
let break_count = 1;
let temp=s_min;
let flag = true;
let flag2 = true;
let i = 0
const st = document.getElementById("start")
const time = document.getElementById("display_time");
const s_time = document.getElementById("s_time")
const b_time = document.getElementById("b_time")
s_time.innerHTML = `${s_min} min`
b_time.innerHTML = `${b_min} min`
time.innerHTML = `0${min}:0${sec}`
const addSesionTime = () => {
    s_min++
    temp=s_min
    s_time.innerHTML = `${s_min} min`
}
const subSessionTime = () => {
    if (s_min > 1) {
        s_min--;
        temp=s_min;
        s_time.innerHTML = `${s_min} min`
    }
}

const addBreakTime = () => {
    b_min++;
    b_time.innerHTML = `${b_min} min`
}
const subBreakTime = () => {
    if (b_min > 0) {
        b_min--;
        b_time.innerHTML = `${b_min} min`
    }

}
const controls_fun = ["addSesionTime()", "subSessionTime()", "addBreakTime()", "subBreakTime()"]
const activeButtons = () => {
    const btn = document.getElementsByTagName("button")
    for (let i = 0; i < 4; i++)
        btn[i].setAttribute("onclick", controls_fun[i])
}

const disableButttons = () => {
    const btn = document.getElementsByTagName("button")
    for (let i = 0; i < 4; i++)
        btn[i].setAttribute("onclick", "")
}
const start = () => {
    if (flag2) {
        min = temp;
        sec = 59;
        if (min >= 10) {
            time.innerHTML = `${min}:00`;
        } else {
            time.innerHTML = `0${min}:00`;
        }
        min--;
    }
    flag2 = true;
    disableButttons()
    st.innerHTML = "Pause"
    st.setAttribute("onclick", "pause()")

    i = setInterval(() => {
        if (min != 0 || sec != 0) {
            if (min < 10 && sec < 10) {
                time.innerHTML = `0${min}:0${sec}`
            }
            else if (min >= 10 && sec < 10)
                time.innerHTML = `${min}:0${sec}`
            else if (min < 10 && sec >= 10) {
                time.innerHTML = `0${min}:${sec}`
            }
            else {
                time.innerHTML = `${min}:${sec}`
            }
            if (sec <= 0) {
                sec = 59;
                min--
            }
            sec--

        } else {
            
            if (flag && b_min != 0) {
                clearInterval(i)
           temp=b_min
                console.log("for break")
                document.getElementById("box").style.backgroundColor = "red"
                document.getElementById("head").innerHTML = `Break ${break_count++}`
                flag = false
                start()
            } else {
                clearInterval(i)
              temp=s_min
                console.log("for session")
                document.getElementById("box").style.backgroundColor = "skyblue"
                document.getElementById("head").innerHTML = `Session  ${++sesion_count}`
                flag = true
                start()
            }

        }
    }, 1000);
}

const pause = () => {
    clearInterval(i)
    st.innerHTML = "Start"
    st.setAttribute("onclick", "start()")
    activeButtons()
    flag2 = false
}


const reset = () => {
    clearInterval(i)
    min = 0
    sec = 0
    s_min=15;
    b_min=5;
    s_time.innerHTML=`${s_min} min`
    b_time.innerHTML=`${b_min} min`
    st.innerHTML = "Start"
    st.setAttribute("onclick", "start()")
    activeButtons()
    flag2 = true
    time.innerHTML = `0${min}:0${sec}`
}

