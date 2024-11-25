const counterValue = document.getElementById('counterValue')

function onIncrement(){
    let previouscounterValue = counterValue.textContent;
    let updateCounterValue = parseInt(previouscounterValue)+ 1
    if(updateCounterValue>0){
        counterValue.style.color="green"
    }else if(updateCounterValue<0){
        counterValue.style.color="red"
    }else{
        counterValue.style.color="black"
    }
    counterValue.textContent = updateCounterValue

}

function onDecrement(){
    let previouscounterValue = counterValue.textContent;
    let updateCounterValue = parseInt(previouscounterValue)-1
    if(updateCounterValue>0){
        counterValue.style.color="green"
    }else if(updateCounterValue<0){
        counterValue.style.color="red"
    }else{
        counterValue.style.color="black"
    }
    counterValue.textContent = updateCounterValue
}

function reset(){
    counterValue.textContent=0
    counterValue.style.color="black"
    
}