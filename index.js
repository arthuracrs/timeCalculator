const $ = document.querySelector.bind(document)

let total = '00:00'

const resultButton = $('#resultButton')
const score = $('.total')

const timeInput1 = $('#timeInput1')
const timeInput2 = $('#timeInput2')

function genDate(text) {
    const tempText = text.split(':')

    return new Date(0, 0, 0, tempText[0], tempText[1], 0)
}

function genText(date) {
    return `${date.getHours()}:${date.getMinutes()}`
}

function sumTime(start, end) {
    console.log(start)
    console.log(end)
    
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
    console.log(start)
    console.log(end)
    
    let tempHours = 0

    if(start.getHours() <= end.getHours()){
        tempHours = end.getHours() - start.getHours()
    }else{
        tempHours = 24 - (start.getHours() - end.getHours())
    }
    console.log(tempHours)
    let tempMinutes = start.getMinutes() + end.getMinutes()
    
    if(start.getMinutes() <= end.getMinutes()){
        tempMinutes = end.getMinutes() - start.getMinutes()
    }else{
        tempMinutes = 60 - (start.getMinutes() - end.getMinutes())
    }
    console.log(tempMinutes)
    let hours = tempHours
    let minutes = tempMinutes

    return hours.toFixed(0) + ":" + ('0' + minutes).slice(-2)
}

resultButton.addEventListener('click', () => {
    const a = genDate(timeInput1.value)
    const b = genDate(timeInput2.value)

    console.log(diff(a,b))
    total = sumTime(genDate(total), genDate(diff(a, b)))
    score.innerHTML = 'TOTAL DO DIA: ' + total
})