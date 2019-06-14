
//trayendo botones para descifrar y encriptar
const decodeButton = document.getElementById('decode-button');
const encodeButton = document.getElementById('encode-button');

//trayendo inputs
let input1D = document.getElementById ('decode-input1.value')
let input2D = document.getElementById ('decode-input2.value')

let input1E = document.getElementById ('encode-input1.value')
let input2E = document.getElementById ('encode-input2.value')

//trayendo outputs
let decodeOutput = document.getElementById('decode-output');
let encodeOutput = document.getElementById('encode-output'); 


//declarando variables que traigan elementos que van a redireccionar
const goHome = document.getElementById('header');
const goOptions = document.getElementsByClassName('go-options');
const goDecode = document.getElementsByClassName('go-decode');
const goEncode = document.getElementsByClassName('go-encode');
const goExit = document.getElementsByClassName('go-exit');

const optionsButton = document.getElementById('hide-detective');

//declarando variables que traigan secciones (elementos a donde se va a redireccionar)
const welcome = document.getElementsById('welcome');
const options = document.getElementsById('options');
const  encode = document.getElementsById('encode');
const  decode = document.getElementsById('decode');
const  exit = document.getElementsById('exit');


// Funcion para redireccionar a la seccion elegida.
const goSection = (section) => {
    welcome.classList.add("hide");
    options.classList.add("hide");
    decode.classList.add("hide");
    encode.classList.add("hide");
    exit.classList.add("hide");
    section.classList.remove('hide');
};


//"chismosas" que introduzcan el resultado de las funciones del objeto 'cipher'
decodeButton.addEventListener('click', decodeOutput.innerHTML = window.cipher.decode(input2D, input1D));
encodeButton.addEventListener('click', encodeOutput.innerHTML = window.cipher.encode(input2E, input1E));

//"chismosas" redireccionar
goHome.addEventListener('click', goSection(options));
goOptions.addEventListener('click', goSection(options));
goEncode.addEventListener('click', goSection(encode));
goDecode.addEventListener('click', goSection(decode));
goExit.addEventListener('click', goSection(exit));


//prueba (no funciona)
optionsButton.addEventListener('click', alert('Hola'));
