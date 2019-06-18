window.cipher = {

  encode: (n, str) => {
    let encodeStr = '';
    let newPosition;
    let newLetter;
    for (let i=0; i<str.length; i++){
     if (123 > str.charCodeAt(i) && str.charCodeAt(i) > 96) {
      newPosition = ((str.charCodeAt(i)-97+n)%26)+97;
      newLetter = String.fromCharCode(newPosition);
      encodeStr += newLetter;
     } else {
      if (91 > str.charCodeAt(i) && str.charCodeAt(i) > 64) {
        newPosition = ((str.charCodeAt(i)-65+n)%26)+65;
        newLetter = String.fromCharCode(newPosition);
        encodeStr += newLetter;
     } else {
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
      if (123 > str.charCodeAt(i) && str.charCodeAt(i) > 96) {
        if((str.charCodeAt(i)-97-n%26)<0) {
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