const newYear=new Date(2023,0,1)

const
dayHolder=document.querySelector(".days")

const
hourHolder=document.querySelector(".hours")

const
minHolder=document.querySelector(".mins")

const
secHolder=document.querySelector(".secs")


function updateTime(){
    const difference=new Date(newYear - new Date())
    console.log(difference.getTime().toString())

    dayHolder.textContent=
    (difference.getTime().toString().split("").splice(0,2).join("")).toLocaleString('en-US',{minimumIntegerDigits: 2})

    hourHolder.textContent=difference.getHours().toLocaleString('en-US',{minimumIntegerDigits: 2})

    minHolder.textContent=difference.getMinutes().toLocaleString('en-US',{minimumIntegerDigits: 2})

    secHolder.textContent=difference.getSeconds().toLocaleString('en-US',{minimumIntegerDigits: 2})

    secHolder.setAttribute("data-active",difference.getSeconds().toLocaleString('en-US',{minimumIntegerDigits}))   

}

setInterval(()=>{
updateTime()    
},
500
)