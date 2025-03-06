let amigoSecreto = [];

function agregarAmigo (){
    let inputAmigo = document.getElementById ("amigo");
    let nombreAmigo = inputAmigo.value;
    if (!nombreAmigo){
        alert ("recuerda que debes ingresar un nombre");
        return;
    }
    amigoSecreto.push (nombreAmigo);
    inputAmigo.value = " ";
    inputAmigo.focus ();
    sumaDeAmigos ();

}

function sumaDeAmigos (){
    let listaAmigos = document.getElementById  ("listaAmigos");
    listaAmigos.innerHTML = " ";

    for (let i = 0 ; i < amigoSecreto.length ; i++){
        let item = document.createElement ("li");
        item.textContent = amigoSecreto [i];
        listaAmigos.appendChild (item);
        
    }

}

function sortearAmigo() {
if (amigoSecreto.length === 0){
    alert("debe tener amigos agregados para sortear")
    return;
}
let amigoSorteado = amigoSecreto[Math.floor(Math.random() * amigoSecreto.length)];
let resultado = document.getElementById ("resultado");
resultado.innerHTML = `tu amigo sorteado como amigo secreto es ${amigoSorteado}`;
let limpiarLista = document.getElementById ("listaAmigos");
limpiarLista = " ";
if (sortearAmigo == true){

Alert ("gracias por jugar Amigo Secreto");

return;
}
}

