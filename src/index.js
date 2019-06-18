
//trayendo botones para descifrar y encriptar
const decodeButton = document.getElementById('decode-button');
const encodeButton = document.getElementById('encode-button');

//trayendo inputs
let input1D = document.getElementById ('decode-input1')
let input2D = document.getElementById ('decode-input2')

let input1E = document.getElementById ('encode-input1')
let input2E = document.getElementById ('encode-input2')

//trayendo outputs y leyendas(frases que aparecen arriba del output) de outputs
let decodeOutput = document.getElementById('decode-output');
let encodeOutput = document.getElementById('encode-output');

let decodeLabel = document.getElementById('decode-label');
let encodeLabel = document.getElementById('encode-label');

let pEncode = document.getElementById('p-encode');
let pDecode = document.getElementById('p-decode');


//declarando variables que traigan secciones y botones que van a redireccionar
const goHome = document.getElementById('header');
const optionsButton = document.getElementById('start');
const encodeOptionButton = document.getElementById('encode-option-button');
const decodeOptionButton = document.getElementById('decode-option-button');
const encodeOption = document.getElementById('encode-option');
const decodeOption = document.getElementById('decode-option');
const returnOptions1 = document.getElementById('return-options1');
const returnOptions2 = document.getElementById('return-options2');
const goExit1 = document.getElementById('go-exit1');
const goExit2 = document.getElementById('go-exit2');
const returnStart = document.getElementById('return-start');


//declarando variables que traigan secciones (elementos a donde se va a redireccionar)
const welcome = document.getElementById('welcome');
const options = document.getElementById('options');
const  encode = document.getElementById('encode');
const  decode = document.getElementById('decode');
const  exit = document.getElementById('exit');


// Funcion para redireccionar a la seccion elegida y linpiar campos de formulario
const goSection = (section) => {
    welcome.classList.add("hide");
    options.classList.add("hide");
    decode.classList.add("hide");
    encode.classList.add("hide");
    exit.classList.add("hide");
    section.classList.remove('hide');
};
//Funciones para limpiar los formularios de encriptar y descifrar; y ocultar frases arriba de los output
const cleanFormD = () => {
    decodeLabel.classList.add('hide');
    decodeOutput.value = "";
    input1D.value = "";
    input2D.value = "";
    pDecode.classList.remove('hide');
};

const cleanFormE = () => {
    encodeLabel.classList.add('hide');
    encodeOutput.value = "";
    input1E.value = "";
    input2E.value = "";
    pEncode.classList.remove('hide');
};
//funcion para limpiar almacenamiento local
const clean = () => localStorage.clear() ;

//"chismosas" que introduzcen el resultado de las funciones del objeto 'cipher' en el input señalado
decodeButton.addEventListener('click', () => {
    //pasa el valor de input2D a un numero, sino lo toma como string
    let n = parseInt(input2D.value);
    //sentencia que iguala el resultado de mi funcion ciopher.decode con el valor de mi cajita con id= decode-output
    decodeOutput.value = window.cipher.decode(n, input1D.value);
    //muestra las frases encima del output
    decodeLabel.classList.remove('hide');
    //oculta los parrafos de mas (creo que esto lo puedo quitar)
    pDecode.classList.add('hide');
});
encodeButton.addEventListener('click', () => {
    let n = parseInt(input2E.value);
    encodeOutput.value = window.cipher.encode(n, input1E.value);
    encodeLabel.classList.remove('hide');
    pEncode.classList.add('hide');
});


// "chismosas" addEventListener para redireccionar con la funcion goSection antes expresada
// para prevenir que se ejecute goSection de manera automatica al abrir el index.html
// se tiene que meter la funcion goSection dentro de una funcion anonima 
// porque si no es como meter una funcion ejecutada como argumento
goHome.addEventListener('click', () => goSection(welcome));
returnStart.addEventListener('click', () => goSection(welcome));
optionsButton.addEventListener('click', () => goSection(options));
decodeOptionButton.addEventListener('click', () => goSection(decode));
encodeOptionButton.addEventListener('click', () => goSection(encode));
decodeOption.addEventListener('click', () => goSection(decode));
encodeOption.addEventListener('click', () => goSection(encode));

// "chismosas" para los botones de regresar que redireccionan,
// previenen que la pagina de actualice, limpia formularios y borra el localStorage
returnOptions1.addEventListener('click', (e) => {
    goSection(options);
    cleanFormD();
    e.preventDefault();
    clean ();
});
returnOptions2.addEventListener('click', (e) => {
    goSection(options);
    cleanFormE();
    e.preventDefault();
    clean ();
});
goExit1.addEventListener('click', (e) => {
    goSection(exit);
    cleanFormD();
    e.preventDefault();
    clean ();
});
goExit2.addEventListener('click', (e) => {
    goSection(exit);
    cleanFormE();
    e.preventDefault();
    clean ();
});