let base64 = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "/",
];

function bsEncode(string) {
  let refined = "";
  let j = 0;
  for (let i = 0; i < string.length; i++) {
    refined += string.charCodeAt(i).toString(2).padStart(8, 0);
  }
  let rem = refined.length - (refined.length % 24);
  let pad = refined.substring(rem);
  var str = "";
  for (let i = 0; i < rem; i++) {
    if ((i + 1) % 6 == 0) {
      str += base64[parseInt(refined.substring(j, i + 1), 2)];
      j = i + 1;
    }
  }
  if (pad) {
    while (pad.length % 6 != 0) {
      pad += "0";
    }
    let f = 0;
    for (let i = 0; i < pad.length; i++) {
      if ((i + 1) % 6 == 0) {
        str += base64[parseInt(pad.substring(f, i + 1), 2)];
        f = i + 1;
      }
    }
    let padQt = (24 - pad.length) / 6;
    while (padQt) {
      str += "=";
      padQt--;
    }
  }
  return str;
}

function bsDecode(string) {
  let arr = [];
  for (let x of string) {
    if (base64.indexOf(x) != -1) {
      let bin = base64.indexOf(x).toString(2).padStart(8, 0).substring(2);
      arr.push(bin);
    }
  }
  arr = arr.join("");
  let final = [];
  var i = 0;
  for (let j = 1; j <= arr.length; j++) {
    if (j % 8 == 0) {
      final.push(parseInt(arr.substr(i, 8), 2));
      i += 8;
    }
  }
  return String.fromCharCode(...final);
}
