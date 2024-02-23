/*estruturas de dados são arrays, objetos, etc.

listas são arrays.

*/

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro" //a virgula no final não é necessaria, mas pode ser colocada sem interferir no codigo.
);

console.log(listaDeDestinos);
listaDeDestinos.push('Curitiba');
console.log(listaDeDestinos);

listaDeDestinos.splice(2, 1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);
