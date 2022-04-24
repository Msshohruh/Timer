const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const milisec = document.querySelector('.milisec')
const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const restartBtn = document.querySelector('.restart')

let mili = 0
let sec = 0
let min = 0
let hour = 0

function startTime() {
    let milisecFunc = setInterval(() => {
    mili++
    if (mili < 100) {
        milisec.textContent = `${mili < 10 ? '0' + mili : mili}`
    } else {
        mili = 0
        milisec.textContent = `${mili < 10 ? '0' + mili : mili}`
        if (sec < 59) {
            sec++
            seconds.textContent = `${sec < 10 ? '0' + sec : sec}`
        } else {
            sec = 0
            seconds.textContent = `${sec < 10 ? '0' + sec : sec}`
            if (min < 59) {
                min++
                minutes.textContent = `${min < 10 ? '0' + min : min}`
            } else {
                min = 0
                minutes.textContent = `${min < 10 ? '0' + min : min}`
                if (hour < 23) {
                    hour++
                    hours.textContent = `${hour < 10 ? '0' + hour : hour}`
                } else {
                    hour = 0
                    hours.textContent = `${hour < 10 ? '0' + hour : hour}`
                }
            }
        }
    }
}, 10)
pauseBtn.addEventListener('click', () => {
    clearInterval(milisecFunc)
})
restartBtn.addEventListener('click', () => {
    clearInterval(milisecFunc)
    mili = 0
    milisec.textContent = `${mili < 10 ? '0' + mili : mili}`
    sec = 0
    seconds.textContent = `${sec < 10 ? '0' + sec : sec}`
    min = 0
    minutes.textContent = `${min < 10 ? '0' + min : min}`
    hour = 0
    hours.textContent = `${hour < 10 ? '0' + hour : hour}`

})
}

startBtn.addEventListener('click', startTime)


