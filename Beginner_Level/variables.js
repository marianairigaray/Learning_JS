/* 

TIPOS DE VARIAVEIS
   var => function scoped - significa que a variavel é acessivel apenas dentro da função onde foi declarada.
   let => block scoped - a variavel é acessivel apenas no bloco onde foi criada. 
   const => é uma constante (define).
   
Como o js separa cada tipo de dados?

   - number - qualquer tipo de numero
        - infinity - numero que ultrapassam os limites numericos definidos pela linguagem (positivo)
        - -infinity - \\ (negativo)
        - NaN -  not an number
   - string
   - boolean 
   - undefined 
   - object
        - array - pode ser vetor ou matriz
        - null
   - function 
   - Symbol 
   - BigInt

   * typeof -> retorna o tipo de alguma variavel

IDENTIFICADORES são os nomes das variaveis, funções, etc.
DECLARAR uma variavel é apenas reservar um espaço na memoria para ela.
    É possivel nao declarar variaveis em JS, mas elas sobem de escopo (para escopo global) dificultando o entendimento do código.
ATRIBUIR um valor a variavel, atribui um valor a varaivel.
   
BLOCO é definido por {}

Boa pratica ao definir variaveis em um codigo: - todas variaveis comecando com minusculas ou todas comecando com maiuscula.
*/

const num = 3

for (var i = 0; i < num; i++){
    console.log(i)
}
console.log(i)

let m
for(m = 0; m < num; m++){
    console.log(m)
}
console.log(m)

for (let j = 0; j < num; j++){
    console.log(j)

    if(j === 2){
        console.log('j existe neste bloco')
    }
}

for(let k = 0; k < num; k++){
    setTimeout(() => {
        console.log(k);
    }, 1000);
}
//set timeout espera 1000ms para imprimir o valor da variavel k (todas as vezes que foi chamado)
//caso var vai imprimir apenas 10 num vezes
//caso let vai imprimir a contagem correta
//VOLTAR AQUI PARA ENTENDER MELHOR

let variable

console.log(variable)
console.log(typeof variable + '\n')

variable = 'mariana'
console.log(variable)
console.log(typeof variable + '\n')

variable = "mariana"
console.log(variable)
console.log(typeof variable + '\n')

variable = 123
console.log(variable)
console.log(typeof variable + '\n')

variable = true
console.log(variable)
console.log(typeof variable + '\n')

variable = NaN
console.log(variable)
console.log(typeof variable + '\n')

variable = null
console.log(variable)
console.log(typeof variable + '\n')

variable = []
console.log(variable)
console.log(typeof variable + '\n')

variable = {}
console.log(variable)
console.log(typeof variable + '\n')

variable = function(){}
console.log(variable)
console.log(typeof variable + '\n')

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];