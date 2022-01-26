import { question } from "readline-sync";
import { bsDecode, bsEncode } from "./helpers.js";

let a = question(
  "Choose one of the following programs to run:\n0.Exit\n1.Encode\n2.Decode-- "
);
switch (a) {
  case "0":
    console.log("Exiting.");
    break;
  case "1":
    let enc = question("Enter data to encode: ");
    console.log(`Here's your encoded string '${bsEncode(enc)}'`);
    break;
  case "2":
    let dec = question("Enter string to decode: ");
    console.log(`Here's your decoded string '${bsDecode(dec)}'`);
    break;
  default:
    console.log("Try again with a valid input");
    break;
}
