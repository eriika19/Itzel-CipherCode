window.cipher = {
  encode: (str, n) => {
    let encodeStr = '';
    const newStr = str.toUpperCase();
    for (let i=0; i<newStr.length; i++){
      if (newStr [i] === ' ' ||
          newStr [i] === 'Ñ') {
      encodeStr += newStr[i];
      } else {
        let newPosition = newStr.charCodeAt(i)+(n%26);
        let newLetter = String.fromCharCode(newPosition);
        encodeStr += newLetter;
      }
    }
    return encodeStr;
  },

  decode: (str, n) => {
    let decodeStr = '';
    const newStr = str.toUpperCase();
    for (let i=0; i<newStr.length; i++){
      if (newStr [i] === ' ' ||
          newStr [i] === 'Ñ') {
      decodeStr += newStr[i];
      } else {
        let newPosition = newStr.charCodeAt(i)-(n%26);
        let newLetter = String.fromCharCode(newPosition);
        decodeStr += newLetter;
      }
    }
    return decodeStr;
  },
};
