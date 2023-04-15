//imagenes del gato
const IMG_INICIO = "image/simon1.png";
const IMG_FIN = "image/simon2.png";
const IMG_ERROR = "image/simon3.png";

//mensajes de gato
const MSN_INICIO = `<img src="${IMG_INICIO}"><p>Ingresa el texto que desees encriptar o desencriptar.</p>`;
const MSN_FINAL = `<img src="${IMG_FIN}"><p>Su mensaje fue `;
const MSN_ERROR = `<img src="${IMG_ERROR}"><p>No seas sucio, ¡Solo letras minusculas!</p>`;

const remplazo = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
};
//elementos de input y output
let input = document.getElementById("texto");
let ouput;
//elementos de output en html
let ouputShow = document.getElementById("resultado");
//elementos de copia en html
let copiaShow = document.getElementById("copia");
//elemento del gato en html
let gatoShow = document.getElementById("mostrar");


//mensaje inicial
gatoShow.innerHTML = MSN_INICIO;

//funcion de actualizar contenido cada vez que textarea este vacio
function actualizar(){
    if (input.value === "" || input.value === null){
        copiaShow.style.opacity = "0";
        ouputShow.style.opacity = "0";        
        gatoShow.innerHTML = MSN_INICIO;
    }
}

//funcion de desencriptar el texto ingresado
function encripta(){
    //si textarea tiene caracteres no permitidos
    let permitidas = /^[a-z ]*$/;
    if (!permitidas.test(input.value)){
        gatoShow.innerHTML = MSN_ERROR;
    }
    //si en textarea tiene contenido vacio o nulo
    else if (input.value === "" || input.value === null){
        gatoShow.innerHTML = MSN_INICIO;
    }
    //encriptando
    else {
        ouput = input.value;
        let help;
        for (const clave in remplazo) {
            let valor = remplazo[clave];
            console.log(valor + ` - ` + clave);
            for (let i = 0; i < ouput.length; i++) {
                let letra = ouput[i];
                console.log(letra);
                if(letra === clave){
                    console.log("es igual");
                }
            }

            // if(ouput.indexOf(clave) !== -1){
            //     ouput = ouput.replace(new RegExp(clave, "g"), valor);
            // }
        }
        copiaShow.style.opacity = "1";
        ouputShow.style.opacity = "1";
        ouputShow.innerHTML = ouput
        gatoShow.innerHTML = MSN_FINAL + `encriptado</p>`;        
    }
}

//funcion de desencriptar el texto ingresado
function desencripta(){
    //si textarea tiene caracteres no permitidos
    let permitidas = /^[a-z ]*$/;
    if (!permitidas.test(input.value)){
        gatoShow.innerHTML = MSN_ERROR;
    }
    //si en textarea tiene contenido vacio o nulo
    else if (input.value === "" || input.value === null){
        gatoShow.innerHTML = MSN_INICIO;
    }
    //desencriptando
    else {
        ouput = input.value;
        for (const clave in remplazo) {
            let valor = remplazo[clave];            
            if(ouput.indexOf(valor) !== -1){
                ouput = ouput.replace(new RegExp(valor, "g"), clave);
            }
        }
        copiaShow.style.opacity = "1";
        ouputShow.style.opacity = "1"        
        ouputShow.innerHTML = ouput        
        gatoShow.innerHTML = MSN_FINAL + `desencriptado</p>`;        
    }
}
function copiar(){
    navigator.clipboard.writeText(ouput)
}
