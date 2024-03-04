/*
ARGUMENT VS PARAMETER

    Argument: 
    Is the value that is declared within the function when the function is called.
    Arguments are used in function call statements to send value from the calling function to the received function.
    During the time of call each argument is always assigned to the parameter in the function definition. 
    exemple:
    funcao(argument1, argument2);

    Parameter:
    Is the value that is defined when the function is declared.
    These are used in the function header of the called function to receive the value from the arguments.
    Parameters are local variables which are assigned values of the arguments when the function is called.
    function funcao(parameter1, parameter2){
        //codigo
    };

OPERATION OF ARGUMENTS 
    Parâmetros primitivos (como um número) são passados para as funções por valor; o valor é passado para a função, 
    mas se a função altera o valor do parâmetro, esta mudança não reflete globalmente ou na função chamada.

    Se você passar um objeto (ou seja, um valor não primitivo (en-US), tal como Array ou um objeto definido por você) 
    como um parâmetro e a função alterar as propriedades do objeto, essa mudança é visível fora da função.
*/

function test(a, b) {
    a = 5;
    b = 10;
    console.log(`Value of a and b in funcion: a = ${a}, b = ${b}`);
}

const a = 1;
let b = 2;
console.log(`Value of a and b outside and before the funcion: a = ${a}, b = ${b}`);

test(a, b);
console.log(`Value of a and b ouside and after the funcion: a = ${a}, b = ${b}`);

/*  
FUNCTION EXPRESSION
    - Uma função pode ser definida dentro de uma expressão. 
    - Uma expressão de função (function expression) é muito similar e tem quase a mesma sintaxe de uma declaração de função.
    A principal diferença entre uma expressão de função e a declaração de uma função é o nome da função (function name),
    o qual pode ser omitido em expressões de funções para criar funções anônimas.

    Exemplo de uma expressão de função anonima:
*/

var square = function (numero) {
    return numero * numero;
};
var x = square(4);

/*
    Uma expressão de função pode também ter um nome, assim é possivel utilizar esta funcao no interior da propria funcao
    ou em um debugger para identificar a função em stack traces:
*/
var fatorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  
  console.log(fatorial(3));
  