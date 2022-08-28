const firstColor=document.querySelector(".first")
const secondColor=document.querySelector(".second")
firstColor.addEventListener("change",()=>{
    document.body.style.cssText=`background-image: linear-gradient(45deg,${firstColor.value},${secondColor.value});`
})
secondColor.addEventListener("change",()=>{
    document.body.style.cssText=`background-image: linear-gradient(45deg,${firstColor.value},${secondColor.value});`
})

const h3=document.querySelector("h3")
h3.innerHTML=`linear-gradient (45deg,${firstColor.value},${secondColor.value})`