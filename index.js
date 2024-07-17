const exchange__seccion=document.querySelector(".exchange__seccion--table")
const arrow_right=document.querySelector(".arrow__right")
const arrow_left=document.querySelector(".arrow__left")
const flecha_derecha=document.querySelector(".flecha_derecha")
const flecha_izquierda=document.querySelector(".flecha_izquieda")
const container_card=document.querySelector(".container_card")



arrow_right.addEventListener("click",()=>{
    
    exchange__seccion.classList.add("carrucel--0")
})
arrow_left.addEventListener("click",()=>{
    exchange__seccion.classList.remove("carrucel--0")
    exchange__seccion.classList.toggle("carrucel--100")
})


flecha_izquierda.addEventListener("click",()=>{
    container_card.classList.add("move_lept")
})