let list=document.querySelector('ul')
let inputText = document.querySelector('input')
let clickButton=document.querySelector('button')

clickButton.addEventListener('click',function(){
    let text=inputText.value
    let q=document.createElement('li')
    q.textContent=text
    list.appendChild(q)
    inputText.value=" "
})


