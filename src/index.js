
//trayendo botones para descifrar y encriptar
const decodeButton = document.getElementById('decode-button');
const encodeButton = document.getElementById('encode-button');

//trayendo inputs
let input1D = document.getElementById ('decode-input1')
let input2D = document.getElementById ('decode-input2')

let input1E = document.getElementById ('encode-input1')
let input2E = document.getElementById ('encode-input2')

//trayendo outputs y leyendas de outputs
let decodeOutput = document.getElementById('decode-output');
let encodeOutput = document.getElementById('encode-output');

let decodeLabel = document.getElementById('decode-label');
let encodeLabel = document.getElementById('encode-label');

let pEncode = document.getElementById('p-encode');


//declarando variables que traigan elementos que van a redireccionar
const goHome = document.getElementById('header');
const optionsButton = document.getElementById('hide-detective');
const encodeOptionButton = document.getElementById('encode-option-button');
const decodeOptionButton = document.getElementById('decode-option-button');
const returnOptions1 = document.getElementById('return-options1');
const returnOptions2 = document.getElementById('return-options2');
const goExit1 = document.getElementById('go-exit1');
const goExit2 = document.getElementById('go-exit2');


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

const cleanFormD = () => {
    decodeLabel.classList.add('hide');
    decodeOutput.value = "";
    input1D.value = "";
    input2D.value = "";
};

const cleanFormE = () => {
    encodeLabel.classList.add('hide');
    encodeOutput.value = "";
    input1E.value = "";
    input2E.value = "";
    pEncode.classList.remove('hide');
};


//"chismosas" que introduzcan el resultado de las funciones del objeto 'cipher'
decodeButton.addEventListener('click', () => {
    decodeOutput.value = window.cipher.decode(input2D.value, input1D.value);
    decodeLabel.classList.remove('hide');    
});
encodeButton.addEventListener('click', () => {
    encodeOutput.value = window.cipher.encode(input2E.value, input1E.value);
    encodeLabel.classList.remove('hide');
    pEncode.classList.add('hide');
});


//"chismosas" redireccionar
goHome.addEventListener('click', () => goSection(options));
optionsButton.addEventListener('click', () => goSection(options));
decodeOptionButton.addEventListener('click', () => goSection(decode));
encodeOptionButton.addEventListener('click', () => goSection(encode));

returnOptions1.addEventListener('click', (e) => {
    goSection(options);
    cleanFormD();
    e.preventDefault();
});
returnOptions2.addEventListener('click', (e) => {
    goSection(options);
    cleanFormE();
    e.preventDefault();
});
goExit1.addEventListener('click', (e) => {
    goSection(exit);
    cleanFormD();
    e.preventDefault();
});
goExit2.addEventListener('click', (e) => {
    goSection(exit);
    cleanFormE();
    e.preventDefault();
});