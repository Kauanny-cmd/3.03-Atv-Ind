import { quest1 } from "./q1";
import { quest2 } from "./q2";
import { quest3 } from "./q3";
import { quest5 } from "./q5";

let a = ['kauanny', 'Wes', 'kaue']
let b = ['kauanny', 'Wes', 'kaue']
//let b = ['a', 'b']

const array1 = ["abc", "def", "ghi"];
const array2 = ["abc", "def", "ghij"];

let cidade = {
    alcunha: "A terra que ensinou a Paraíba a ler.",
    coodenadas: {
      latitude: [6, 53, 24],
      longitude: [38, 33, 43],
    },
    nome: "Cajazeiras",
    estado: "Paraíba",
  }

console.log(`Questão 1: ` + quest1({a, b})); // questão 1
console.log(`Questão 2: ` + quest2({a, b})); // questao 2
console.log(`Questão 3: ` + quest3(array1, array2)); //questao 3
console.log(`Questão 5: ` + quest5(cidade)); // questao 5