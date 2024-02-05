let ulList=document.querySelector('ul')
let inputText=document.querySelector('input')
let addButton=document.querySelector("#add")
//console.log(addButton)

addButton.addEventListener('click',function(){
    let q1=inputText.value
    let newLi=document.createElement('li')
    // console.log(newLi)
    newLi.textContent=q1
    createButton(newLi)
    ulList.appendChild(newLi)
    inputText.value=" "


})

function createButton(li){
    let r=document.createElement('button')
    r.textContent="remove"
    r.classList.add('remove')
    li.appendChild(r)



    let u=document.createElement('button')
    u.textContent="up"
    u.classList.add("up")
    li.appendChild(u)


    let d=document.createElement('button')
    d.textContent='down'
    d.classList.add('down')
    li.appendChild(d)


}
ulList.addEventListener('click',function(){
    if(event.target.tagName="BUTTON"){
        if(event.target.className=="remove"){
            let li=event.target.parentElement
            let ul=li.parentElement
            ul.removeChild(li)
        }
        else if (event.target.className=='up'){
            let li=event.target.parentElement
            let ul=li.parentElement
            let prv=li.previousElementSibling
            if(prv){
                ul.insertBefore(li,prv)
            }
        }    
        else if(event.target.className=='down'){
            let li=event.target.parentElement
            let ul=li.parentElement
            let nxt=li.nextElementSibling
            if(nxt){
                ul.insertBefore(nxt,li)
                }
        }        
                

            
            

        
        
    }

})
