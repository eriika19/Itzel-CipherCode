window.cipher = {
//definir funciones dentro del objeto cipher con dos parametros (offset, string)
  encode: (n, str) => {
    //declaro las variables que voy a utilizar
    // mensaje descifrado, nuevo # de posicion de caracter encriptado en abecedario ASCII y caracter que corresponde a esa nueva posicion
    let encodeStr = '';
    let newPosition;
    let newLetter;
    // for con un contador i para que analice cada caracter del string y
    // i debe ser < que el largo del string pues el conteo de index de un string comienza en 0 y el
    //conteo del largo de un string comienza en 1
    //actualizacion del contador i
    for (let i=0; i<str.length; i++){
      //evalua si el caracter es una mayuscula o minuscula
     if (123 > str.charCodeAt(i) && str.charCodeAt(i) > 96) {
       //obtiene la posicion ASCII (#) del caracter del string que esta evaluandose,
       //le resta 97 a ese # de poscion para pasarlo a nuestro abecedario y 
       //suma n(despalazamiento) para obtener el nuevo caracter en nuestro abecedario
       //obtiene residuo de 26(caracteres en el abecedario)
       //suma 97 para obtener la poscion del nuevo caracter en el ASCII
      newPosition = ((str.charCodeAt(i)-97+n)%26)+97;
      newLetter = String.fromCharCode(newPosition);
      //concatena en nuevo caracter ya encriptado a mi variable de string ecriptado
      encodeStr += newLetter;
     } else {
       //evalua si el caracter del string es mayuscula
      if (91 > str.charCodeAt(i) && str.charCodeAt(i) > 64) {
        newPosition = ((str.charCodeAt(i)-65+n)%26)+65;
        newLetter = String.fromCharCode(newPosition);
        encodeStr += newLetter;
     } else {
       //si el caracter evaluado no es una minuscula ni mayuscula concatena ese caracter
       // directamente a la variable del string encirptado
       encodeStr += str[i];
     }
    }
  }
    return encodeStr;
  },

  decode: (n, str) => {
    let decodeStr = '';
    let newPosition;
    let newLetter;
    for (let i=0; i<str.length; i++){
      //evalua si es minuscula
      if (123 > str.charCodeAt(i) && str.charCodeAt(i) > 96) {
        //evalua si el residuo del offset ingresado entre 26(abecedario) restado 
        //a la posicion del caracter en nuestro abecedario es < 0
        if((str.charCodeAt(i)-97-n%26)<0) {
          // si es menor a cero la nueva posicion del caracter en el codigo ASCII sera deducida
          // al sumar el residuo del offset ingresado entre 26(abecedario)
          newPosition = 123 + (str.charCodeAt(i)-97-n%26);
        } else {
          newPosition = 97 + (str.charCodeAt(i)-97-n%26);
        }
        newLetter = String.fromCharCode(newPosition);
        decodeStr += newLetter;
      } else {
        if (91 > str.charCodeAt(i) && str.charCodeAt(i) > 64) {
          if((str.charCodeAt(i)-65-n%26)<0) {
            newPosition = 91 + (str.charCodeAt(i)-65-n%26);
          } else {
            newPosition = 65 + (str.charCodeAt(i)-65-n%26);
          }
          newLetter = String.fromCharCode(newPosition);
          decodeStr += newLetter;
        } else {
          decodeStr += str[i];
        }
      }
    }
        return decodeStr;
      },
    };