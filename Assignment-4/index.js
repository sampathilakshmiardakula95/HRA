const ContainerEl = document.getElementById("Container")
ContainerEl.addEventListener("click",()=>{
    if(ContainerEl.style.backgroundColor==='red'){
        ContainerEl.style.backgroundColor="green"
    }
    else{
        ContainerEl.style.backgroundColor="red"
    }
})