let head=document.querySelector('h1')
let text=document.querySelector('input')
let changecolor=document.querySelector('button')

changecolor.addEventListener("click",function(){
    let colortext=text.value
    head.style.color=colortext
    colortext=""
})