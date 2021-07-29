const $ = document.querySelector.bind(document)

function genDate(text) {
    const tempText = text.split(':')

    return new Date(0, 0, 0, tempText[0], tempText[1], 0)
}

function genText(date) {
    return `${date.getHours()}:${date.getMinutes()}`
}

function sumTime(start, end) {

    let tempHours = start.getHours() + end.getHours()
    let tempMinutes = start.getMinutes() + end.getMinutes()

    let hours = tempHours
    let minutes = tempMinutes

    if (minutes > 59) {
        hours = tempHours + (tempMinutes / 60)
        minutes = tempMinutes % 60
    }

    return hours.toFixed(0) + ":" + ('0' + minutes).slice(-2)
}

function diff(start, end) {

    let tempMinutes = 0
    let startMinutes = (start.getHours() * 60) + start.getMinutes()
    let endMinutes = (end.getHours() * 60) + end.getMinutes()

    if (startMinutes <= endMinutes) {
        tempMinutes = endMinutes - startMinutes
    } else {
        tempMinutes = 1440 - (startMinutes - endMinutes)
    }

    let hours = Math.floor(tempMinutes / 60)
    let minutes = tempMinutes % 60

    return ('0' + hours).slice(-2) + ":" + ('0' + minutes).slice(-2)
}

function updateScore() {
    const score = $('.total')
    total = sumTime(genDate(turns[0]), genDate(turns[1]))
    score.innerHTML = 'TOTAL DO DIA: ' + total
}

let turns = ['00:00', '00:00']
let total = sumTime(genDate(turns[0]), genDate(turns[1]))

const resul1tButton = $('#result1Button')
const resul2tButton = $('#result2Button')

result1Button.addEventListener('click', function () {

    const parentNode = this.parentNode

    const input1 = parentNode.querySelector('#timeInput1')
    const input2 = parentNode.querySelector('#timeInput2')

    let temp = diff(genDate(input1.value), genDate(input2.value))
    turns[0] = temp
    
    updateScore()
})

result2Button.addEventListener('click', function () {
    const parentNode = this.parentNode

    const input1 = parentNode.querySelector('#timeInput1')
    const input2 = parentNode.querySelector('#timeInput2')

    let temp = diff(genDate(input1.value), genDate(input2.value))
    turns[1] = temp

    const score = $('.total')
    updateScore()
})