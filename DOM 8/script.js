let firstLi=document.querySelector('li')
console.log(firstLi)


let nodeListOfFruits=document.querySelectorAll('li')
console.log(nodeListOfFruits)


for(i=0;i<nodeListOfFruits.length;i++){
    nodeListOfFruits[i].style.color="red"
}



let elementWithClassFur=document.querySelectorAll('.fur')
console.log(elementWithClassFur)


for(i=0;i<elementWithClassFur.length;i++){
    elementWithClassFur[i].style.backgroundColor="blue"
}


let elementWithClassVeg=document.querySelectorAll('.veg')
console.log(elementWithClassVeg)


for(i=0;i<elementWithClassVeg.length;i++){
    elementWithClassVeg[i].style.backgroundColor="green"
}



