const bgContainerEl = document.getElementById("bgContainer")
const colorTextEl = document.getElementById("colorText")
const changeColor = document.getElementById("changeColor")
const bodyColorEl = document.getElementById('bodyColor')
const bodyEl = document.getElementById("body")
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]

changeColor.addEventListener('click',()=>{
    let hexcode='#'
    let bodyhexcode='#'
    for(let i=0;i<6;i++){
        let index = Math.floor(Math.random()*16)
        hexcode=hexcode+arr[index]
        console.log(hexcode)
        colorTextEl.textContent=hexcode
        bgContainerEl.style.backgroundColor=hexcode
        
    }
    for(let i=0;i<6;i++){
        let index=Math.floor(Math.random()*16)
        bodyhexcode=bodyhexcode+arr[index]
        console.log(bodyhexcode)
        bodyColorEl.style.backgroundColor=bodyhexcode
        bodyEl.textContent=bodyhexcode
        bodyEl.style.color="white"

    }
})
