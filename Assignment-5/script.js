<<<<<<< HEAD
let counterValue = document.getElementById('counterValue')

let incrementEl = document.getElementById("increment")
let decrementEl = document.getElementById('decrement')
let resetEl = document.getElementById('reset')

let count = 0

function countLogic() {
    if (count > 0) {
        counterValue.style.color = 'green'
    } else if (count < 0) {
        counterValue.style.color = 'red'
    } else {
        counterValue.style.color = 'black'
    }

}

incrementEl.addEventListener('click', () => {
    count++
    counterValue.textContent = count
    countLogic()
})

decrementEl.addEventListener('click', () => {
    count--
    counterValue.textContent = count
    countLogic()
})

resetEl.addEventListener('click', () => {
    count = 0
    counterValue.textContent = count
    counterValue.style.color = 'black'
})
=======
let counterValue = document.getElementById('counterValue')

let incrementEl = document.getElementById("increment")
let decrementEl = document.getElementById('decrement')
let resetEl = document.getElementById('reset')

let count = 0 

function countLogic(){
    if(count>0){
        counterValue.style.color='green'
    }else if (count<0){
        counterValue.style.color='red'
    }else{
        counterValue.style.color='black'
    }

}

incrementEl.addEventListener('click',()=>{
    count++
    counterValue.textContent=count
    countLogic()
})

decrementEl.addEventListener('click',()=>{
    count--
    counterValue.textContent=count
    countLogic()
})

resetEl.addEventListener('click',()=>{
    count=0
    counterValue.textContent=count
    counterValue.style.color='black'
})
>>>>>>> c85f6041b0aad7fdc9dccf4c8a87ec5691a6893e
