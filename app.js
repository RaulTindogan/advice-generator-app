const button = document.querySelector('.button')
const adviceId = document.querySelector('.advice__id')
const advice = document.querySelector('.advice__heading')

button.addEventListener('click', ()=>{
    const timeStamp = new Date().getTime()
    fetch(`https://api.adviceslip.com/advice?timsestamp${timeStamp}`)
    .then(object => object.json())
    .then(data => {
        adviceId.innerHTML = "#" + data.slip.id
        advice.innerHTML = data.slip.advice
    })
})