//<h2 id = "a" class = "b" name = "c">Fruits</h2>



//by tagname
let a=document.querySelector('h2')
console.log(a)


//by id
let b=document.querySelector('#a')
console.log(b)


//by class
let c=document.querySelector('.b')
console.log(c)

//by atribute
let d=document.querySelector('[name="c"]')
console.log(d)


let heading=document.querySelector('h4')
let color=document.querySelector('button')

color.addEventListener('click',function(){
    heading.style.color="red"
    
})





