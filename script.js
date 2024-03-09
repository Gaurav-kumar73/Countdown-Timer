const endDate = "24 December 2050 03:00 PM"
const input = document.querySelectorAll("input")
document.getElementById("end-date").innerText = endDate

function countdown(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000

    if(diff < 0) return
    input[0].value = Math.floor(diff / 3600 / 24 / 30 / 12) % 100
    input[1].value = Math.floor(diff / 3600 / 24 / 30) % 12
    input[2].value = Math.floor(diff / 3600 / 24) % 30
    input[3].value = Math.floor(diff / 3600 ) % 24
    input[4].value = Math.floor(diff / 60 ) % 60
    input[5].value = Math.floor(diff) % 60
}


countdown()

setInterval(
    ()=>{
        countdown()
    },
    1000
)