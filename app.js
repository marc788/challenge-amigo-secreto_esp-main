// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
 //capturar el valor del campo de entrada
 let nombreAmigo = document.getElementById("amigo").value.trim();
 let resultado = document.getElementById("resultado");
 //validar que exista un nombre escrito
 if (nombreAmigo === "") {
    resultado.innerHTML = "Por favor ingrese un nombre";
    resultado.className = "resut-list-error";
 }else{
    //validar que exista un nombre valido, que no sea numero
   if (!isNaN(nombreAmigo) || /\d/.test(nombreAmigo)) {
    resultado.innerHTML = "El nombre ingrsado no es valido";
        resultado.className = "result-list-error";
        
    }
    else {
        //validar que el nombre ingresado no se encuentre en la array
        if (amigos.includes(nombreAmigo)) {
            resultado.innerHTML = "El nombre ya fue ingresado, ingrese otro";
            resultado.className = "result-list-error";
           
    }else{
        //agregar el nombre ingresado al array y actualizar la lista
        amigos.push(nombreAmigo);
        actualizarListaAmigos();
     if (amigos.length !== 0) {
        resultado.innerHTML = "";
     } 
     limpiarCampo();
     }
    }
 } 
    return;
}
function actualizarListaAmigos() {
    //obtener el elemento de lista
    let lista = document.getElementById(listaAmigos);
    //limpiar lista existente
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement(li);
        //agregar elementos a la lista
        li.texContent = amigos[i];
        lista.appendChild(li);
        //limpiar campo
        
      }
    return;
}
function limpiarCampo() {
    document.getElementById("amigo").value = "";
    
}  
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    //validar que exista amigos disponibles
    if (amigos.length === 0){
        resultado.innerHTML = "no se puede sortear, no hay la contidad necesaria de amigos registrados";
        resultado.className = "result-list-error";
    
    } else{
        //generar indice aleatorio
        let generarIndice = Math.floor(Math.random () * amigos.length);
        //obtener el nombre sorteado a travez del indice que se genero
        let amigoSorteado = amigos[generarIndice];
        //mostrar resultado 
        resultado.innerHTML = `El amigo secreto es:${amigoSorteado}`;
        resultado.className = "result-list";
        
    }
    return;
}