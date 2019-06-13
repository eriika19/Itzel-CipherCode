window.cipher = {
  encode: (n, str) => {
    let encodeStr = '';
    const newStr = str.toUpperCase();
    for (let i=0; i<newStr.length; i++){
     if ([' ','Ñ',',','.',':','@','¿','?','¡','!'].indexOf(newStr[i]) > -1) {
      encodeStr += newStr[i];
      } else {
        let newPosition = ((newStr.charCodeAt(i)-65+n)%26)+65;
        let newLetter = String.fromCharCode(newPosition);
        encodeStr += newLetter;
      }
    }
    return encodeStr;
  },

  decode: (n, str) => {
    let decodeStr = '';
    const newStr = str.toUpperCase();
    for (let i=0; i<newStr.length; i++){
    if ([' ','Ñ',',','.',':','@','¿','?','¡','!'].indexOf(newStr[i]) > -1) {
      decodeStr += newStr[i];
      } else {
        let newPosition;
        if((newStr.charCodeAt(i)-65-n%26)<0) {
          newPosition = 91 + (newStr.charCodeAt(i)-65-n%26);
        } else {
          newPosition = 65 + (newStr.charCodeAt(i)-65-n%26);
        }
        let newLetter = String.fromCharCode(newPosition);
        decodeStr += newLetter;
      }
    }
    return decodeStr;
  },
};
