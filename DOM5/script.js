let bdy=document.querySelector('body')
bdy.addEventListener('click',function(event){
    console.log(event.target.className)
})


let add=document.querySelector('button')
let text=document.querySelector('input')
let list=document.querySelector('ul')

add.addEventListener('click',function(){
    let q=text.value
    let newel=document.createElement('li')
    newel.textContent=q
    list.appendChild(newel)
    //console.log(list)
    text.value=" "
    
})
