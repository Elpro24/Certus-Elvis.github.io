//1 cear un formulario con botones para ingresar informacion atras de javascrip
// paso 01: selecionar al boton que prusuzca en evento (ID)
//poaso02: añadimos u manejador de evento
document.getElementById("boton").addEventListener("click",function(){
    //extraer los datos del usuario, declarando variables
    let nombre = document.getElementById("nombre").value
    let edad= document.getElementById("edad").value
    //mostrar la informcion
    document.getElementById("salida").innerHTML= " Bienvenido " + nombre + " a nuetra ferreteria 5 PATITAS y te saludamos por tus " + edad + " años de vida. "
})