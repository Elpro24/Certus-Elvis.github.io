//selleccionamos solo uNA CLASE
const carruseljs = document.querySelector(".lista")

//utilizaremos las siguintes variables(let)
let izquierda = carruseljs.scrollLeft -
carruseljs.clientWidth
let intervalo = null
let paso = 1
//LO QUE PASAR AUTOMATICAMNET
const star = () =>{
    //el tiempo que se dara
    intervalo = setInterval(function() {
        // me indica la direcccion y los pasos a realizar
        carruseljs.scrollLeft = carruseljs.scrollLeft + paso
        // si la lista es igual  a la varablr isq --> avanzara de 1 en 1
        if(carruseljs.scrollLeft === izquierda){
            paso = paso *- 1
        }
        else if (carruseljs.scrollLeft === 0){
            paso = paso *- 1

        }
    },10)
}

//que pasara cuando se detenga
const stop = () =>{
    clearInterval(intervalo)
}
// creamos un evento parar detener la accion al pasar el mause
carruseljs.addEventListener("mouseover",() =>{
    stop()
})
carruseljs.addEventListener("mouseover",() => {
    star()
})


// ya esta funcionando
star();