const link=document.getElementById("link1")
const link2=document.getElementById("link2")

const image=document.getElementById("img")


var card1 =document.getElementById("card1")
 var card2 =document.getElementById("card2")


link.addEventListener("click",(event)=>{
    event.preventDefault()
    

    image.classList.add("toggle")
    image.classList.remove("toggle2")
    
    card1.classList.add("toggle3")
    card1.classList.remove("toggle4")
    card2.classList.add("toggle")
    card2.classList.remove("toggle2")
    
})

link2.addEventListener("click",(event)=>{
    event.preventDefault()
    console.log("clicked")
    image.classList.add("toggle2")
    image.classList.remove("toggle")
    card2.classList.add("toggle2")
    card2.classList.remove("toggle")

    card1.classList.add("toggle4")
    card1.classList.remove("toggle3")

    
    


})








