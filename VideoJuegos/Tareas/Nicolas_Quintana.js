// Nicolas Quintana Kluchnik - A01785655
"use strict";

// Escribe una función llamada firstNonRepeating que encuentre el primer 
// carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'

function firstNonRepeating(str) { //recibe un string
    for (let i = 0; i < str.length; i++) { //recorre el string con un for loop
        let char = str.charAt(i); //crea una variable que guarda el caracter en la pocision 1
        if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) { //lee los caracters
            return char; //si el caracter no se repite, regresa el caracter
        }
    }
    return null; //regresa null si no se repite ningun character
}

console.log(firstNonRepeating('abacddbec'));

//Escribe una función llamada bubbleSort que implemente el algoritmo 'bubble-sort' 
//para ordenar una lista de números.

function bubbleSort(arr) { //lee un array
    let len = arr.length; //La variable en cual se guarda la longitud
    for (let i = 0; i < len; i++) { //recorre el array
        for (let j = 0; j < len; j++) { //lo recorre otra vez
            if (arr[j] > arr[j + 1]) { //si el numero en pos 1 es mayor que el numero en pos 2
                let tmp = arr[j]; //crea una variable temporal donde estara el numero en pos 1
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([56, 39, 86, 43, 28, 90, 12, 75, 67, 34])); 

//Escribe dos funciones: la primera con nombre invertArray que invierta un arreglo de 
//números y regrese un nuevo arreglo con el resultado; la segunda, con nombre invertArrayInplace,
//que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.

function invertArray(arr) { //recibe array
    let newArr = []; //se crea un array nuevo
    for (let i = arr.length - 1; i >= 0; i--) { //recorre el array
        newArr.push(arr[i]); //agrega los elementos del nuevo array
    }
    return newArr; //regresa el nuevo array
}
function invertArrayInplace(nums) { //recibe array
    for (let i = 0; i < nums.lenght / 2; i++) { //recorre el array
        let temp = nums[i]; //crea una variable temporal
        nums[i] = nums[nums.length - 1 - i]; //cambia los elementos de lugar
        nums[nums.length - 1 - i] = temp;
    }
    return nums; //regresa el array
}

console.log(invertArray([12, 45, 35, 67, 91, 43, 34]))
console.log(invertArrayInplace([12, 45, 35, 67, 91, 43, 34]))

//Escribe una función llamada capitalize que reciba una cadena de texto y 
//regrese una nueva con la primer letra de cada palabra en mayúscula.

function capitalize (str) { //recibe string
    let word = str.split(' '); //crea un array con las palabras del string
    for (let i = 0; i < word.length; i++) { //recorre el array
        word[i] = word[i][0].toUpperCase() + word[i].slice(1); //crea una variable que guarda la palabra
    }
    return word.join(' '); //regresa el array
}

console.log(capitalize('hola mundo'));

//Escribe una función llamada mcd que calcule el máximo común divisor de dos números.

function mcd(a, b) { //recibe dos numeros
    if (b === 0) return a; //si b es 0, regresa a
    return mcd(b, a % b); //regresa el maximo comun divisor
}

console.log(mcd(12866, 15642));

//Crea una función llamada hackerSpeak que cambie una cadena de texto a 'Hacker Speak'. 
//Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.

function hackerSpeak(str) { //recibe string
    let chars = { 'a': '4', 'e': '3', 'i': '1', 'o': '0', 's': '5' }; //crea un objeto con los caracteres
    return str.split('').map(char => chars[char] || char).join(''); //cambia los caracteres
}

console.log(hackerSpeak('Javascript es divertido'));

//Escribe una función llamada factorize que reciba un número, y regrese una lista con todos sus factores.

function factorize(num) { //recibe un numero
    let factors = []; //crea un array vacio
    for (let i = 1; i <= num; i++) { //recorre el numero
        if (num % i === 0) factors.push(i); //si el numero es divisible por i, agrega i al array
    }
    return factors; //regresa el array
}

console.log(factorize(12));

//Escribe una función llamada deduplicate que quite los elementos duplicados de un arreglo y regrese 
//una lista con los elementos que quedan.

function deduplicate(arr) { //recibe un array
    return arr.filter((elem, index) => arr.indexOf(elem) === index); //filtra los elementos
}

console.log(deduplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5]));


//Escribe una función llamada findShortestString que reciba como parámetro una lista de cadenas de texto, 
//y regrese la longitud de la cadena más corta.

function findShortestString(arr) { //recibe un array
    return arr.reduce((shortest, str) => shortest.length < str.length ? shortest : str).length; //regresa la cadena mas corta
}

console.log(findShortestString(['hola', 'adios', 'hello', 'bye']));

//Escribe una función llamada isPalindrome que revise si una cadena de texto es un palíndromo o no.

function isPalindrome(str) { //recibe un string
    return str === str.split('').reverse().join(''); //regresa si el string es un palindromo
}

console.log(isPalindrome('oso'));

//Escribe una función llamada sortStrings que tome una lista de cadena de textos y devuelva una 
//nueva lista con todas las cadenas en orden alfabético.

function sortStrings(arr) { //recibe un array
    return arr.sort(); //ordena el array
}

console.log(sortStrings(['hola', 'adios', 'hello', 'bye']));

//Escribe una función llamada stats que tome una lista de números y devuelva una lista con dos elementos: la mediana y la moda.

function stats(arr) { //recibe un array
    const sum = arr.reduce((acc, num) => acc + num, 0); //suma los elementos del array
    const median = arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)]; //para calcular la mediana
    const mode = arr.sort((a, b) => arr.filter(v => v === a).length - arr.filter(v => v === b).length).pop(); //para calcular la moda
    return [median, mode]; //regresa la mediana y la moda
}

console.log(stats([13, 22, 36, 48, 51, 63, 54, 29, 34, 16, 28, 31, 43, 59]));

//Escribe una función llamada popularString que tome una lista de cadenas de texto y devuelva la cadena más frecuente.

function popularString(arr) { //recibe un array
    return arr.sort((a, b) => arr.filter(v => v === a).length - arr.filter(v => v === b).length).pop(); //regresa la cadena mas frecuente
}

console.log(popularString(['hola', 'adios', 'hello', 'bye', 'hola', 'hello', 'hola']));

//Escribe una función llamada isPowerOf2 que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.

function isPowerOf2(num) { //recibe un numero
    return num && (num & (num - 1)) === 0; //regresa si el numero es potencia de 2
}

console.log(isPowerOf2(16));
console.log(isPowerOf2(18));

//Escribe una función llamada sortDescending que tome una lista de números y devuelva una nueva lista con todos los 
//números en orden descendente.

function sortDescending(arr) { //recibe un array
    return arr.sort((a, b) => b - a); //ordena el array de manera descendente
}

console.log(sortDescending([56, 39, 86, 43, 28, 90, 12, 75, 67, 34]));
