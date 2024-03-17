const exchange__seccion=document.querySelector(".exchange__seccion--table")
const arrow_right=document.querySelector(".arrow__right")
const arrow_left=document.querySelector(".arrow__left")



arrow_right.addEventListener("click",()=>{
    exchange__seccion.classList.remove("carrucel--100")
    exchange__seccion.classList.add("carrucel--0")
})
arrow_left.addEventListener("click",()=>{
    exchange__seccion.classList.remove("carrucel--0")
    exchange__seccion.classList.toggle("carrucel--100")
})