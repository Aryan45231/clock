let min =0;
let sec=0;
let s_min=2
let b_min=0
let flag=true;

const start=()=>{
    if(s_min==0 && b_min==0){
        alert("please eneter the time")
        return;
    }
  if(s_min !=0 && b_min ==0){
    min=s_min;
    sec=59;
    console.log(`${min}:00`)
    setInterval(()=>{
        if(sec<=0){
            sec=59;
            min--
            if(min==-1)
            min=s_time
        }
                sec--

    console.log(`${min}:${sec}`)

    }, 300)
  }

}
start()