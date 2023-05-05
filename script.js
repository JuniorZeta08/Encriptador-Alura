const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// ´La letra "a" se convertira para "ai"´
// ´La letra "e" se convertira para "enter"´
// ´La letra "i" se convertira para "imes"´
// ´La letra "o" se convertira para "ober"´
// ´La letra "u" se convertira para "ufat"´

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(StringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    StringEncriptada = StringEncriptada.toLowerCase()

    for( let i = 0; i < matrizCodigo.length; i++){
        if(StringEncriptada.includes(matrizCodigo[i][0])){
            StringEncriptada = StringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return StringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";

}

function desencriptar(StringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    StringDesencriptada = StringDesencriptada.toLowerCase()

    for( let i = 0; i < matrizCodigo.length; i++){
        if(StringDesencriptada.includes(matrizCodigo[i][1])){
            StringDesencriptada = StringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return StringDesencriptada
}

function btnCopiar(){
    const contenido = mensaje.value;
    navigator.clipboard.writeText(contenido)
        .then(() => {
            alert('El texto se ha copiado al portapapeles');
        })
        .catch((error) => {
            alert('Error al copiar el texto: ' + error);
        });
}