let ulList=document.querySelector('ul')
let inputValue = document.querySelector('input')
let idOne=document.querySelector('#one')

idOne.addEventListener('click',function(){
    let fruittext=input.value
    let newLi=document.createElement('li')
    newLi.textContent=fruittext
    createButtons(newLi)
    ulList.appendChild(newLi)
    input.value="  "
})



function createButtons(li){
    let remove=document.createElement('button')
    remove.textContent="remove"
    remove.classList.add('remove')
    li.appendChild(remove)


    let up=document.createElement('button')
    up.textContent='up'
    up.classList.add("up")
    li.appendChild(up)


    let down=document.createElement('button')
    down.textContent='down'
    down.classList.add('down')
    li.appendChild(down)
    

}


ulList.addEventListener('click',function(){
    if (e.target.tagName=='button'){
        let li=e.target.parentelement
        let ul=li.parentelement
        ul.removechild(li)



    }

})