function BinToDec(numero) {
  var array = numero.toString().split('');
  array.reverse();

  var result = 0;

  for (let i = 0; i < array.length; i++) {
    var valor = array[i] * 2 ** i;
    result = result + valor;
  }

  return result;
}
function BinToHex(numero) {
  let num = BinToDec(numero);
  let Hex = num.toString(16);

  return Hex;
}
function BinToOct(numero) {
  let num = BinToDec(numero);
  let Oct = num.toString(8);

  return Oct;
}

function OctToDec(numero) {
  var array = numero.toString().split('');
  array.reverse();

  var result = 0;

  for (let i = 0; i < array.length; i++) {
    var valor = array[i] * 8 ** i;
    result = result + valor;
  }

  return result;
}
function OctToHex(numero) {
  let Oct = OctToDec(numero);
  let Hex = Oct.toString(16);

  return Hex;
}
function OctToBin(numero) {
  let Oct = OctToDec(numero);
  let Bin = Oct.toString(2);

  return Bin;
}

function HexToDec(numero) {
  var array = numero.toString().split('');
  array.reverse();

  var result = 0;

  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case 'a':
        var valor = 10 * 16 ** i;
        break;
      case 'b':
        var valor = 11 * 16 ** i;
        break;
      case 'c':
        var valor = 12 * 16 ** i;
        break;
      case 'd':
        var valor = 13 * 16 ** i;
        break;
      case 'e':
        var valor = 14 * 16 ** i;
        break;
      case 'f':
        var valor = 15 * 16 ** i;
        break;
      default:
        var valor = array[i] * 16 ** i;
    }

    result = result + valor;
  }

  return result;
}
function HexToBin(numero) {
  let num = HexToDec(numero);
  let Hex = num.toString(2);
  return Hex;
}
function HexToOct(numero) {
  let num = HexToDec(numero);
  let Oct = num.toString(8);
  return Oct;
}

export {
  BinToDec,
  BinToHex,
  BinToOct,
  OctToDec,
  OctToBin,
  OctToHex,
  HexToDec,
  HexToBin,
  HexToOct,
};
