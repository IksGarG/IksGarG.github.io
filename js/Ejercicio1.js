// Iker Garcia German
// 09/03/2023
// Descripcion: Ejercicio 1 de JS
//____________________________________________________________________________________
//____________________________________________________________________________________
// Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'

function findFirstNonRepeatedChar2() {
    let str = document.getElementById("str1").value;
    let char,
        charCount = {};
    for (let i = 0, len = str.length; i < len; i++) {
        char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    for (char in charCount) {
        if (charCount[char] === 1) {
            document.getElementById("result1").innerHTML = char;
        }
    }
}

//____________________________________________________________________________________
// Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.

function bubbleSort2() {
    let items = document.getElementById("str2").value;
    items = items.split(",");
    let length = items.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < (length - i - 1); j++) {
            if(items[j] > items[j+1]) {
                let tmp = items[j];
                items[j] = items[j+1];
                items[j+1] = tmp;
            }
        }
    }
    document.getElementById("result2").innerHTML = items;
}


//____________________________________________________________________________________
// Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.

function reverseArray2() {
    let arr = document.getElementById("str3").value;
    arr = arr.split(",");
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    document.getElementById("result3").innerHTML = newArr;
}

function reverseArrayInPlace2() {
    let arr = document.getElementById("str3").value;
    for (let i = 0; i < arr.length / 2; i++) {
        let tmp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tmp;
    }
    document.getElementById("result3").innerHTML = arr;
}

//____________________________________________________________________________________
// Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.

function capitalize2() {
    let str = document.getElementById("str4").value;
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    document.getElementById("result4").innerHTML = words.join(' ');
}


//____________________________________________________________________________________
//Escribe una función que calcule el máximo común divisor de dos números.

function gcd2() {
    let num1 = document.getElementById("str5").value;
    let num2 = document.getElementById("str6").value;
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    document.getElementById("result5").innerHTML = num1;
}


//____________________________________________________________________________________
// Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.

function hackerSpeak2() {
    let str = document.getElementById("str7").value;
    let hacker = {
        a: 4,
        e: 3,
        i: 1,
        o: 0,
        s: 5,
        t: 7,
        z: 2,
        l: 1
    };
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (hacker[str[i].toLowerCase()]) {
            newStr += hacker[str[i].toLowerCase()];
        } else {
            newStr += str[i];
        }
    }
    document.getElementById("result6").innerHTML = newStr;
}

//____________________________________________________________________________________
// Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].

function factorize2() {
    let n = document.getElementById("str8").value;
    let factors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i);
        }
    }
    document.getElementById("result7").innerHTML = factors;
}



//____________________________________________________________________________________
// Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]

function removeDuplicates2() {
    let arr = document.getElementById("str9").value;
    arr = arr.split(",");
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    document.getElementById("result8").innerHTML = unique;
}

//____________________________________________________________________________________
// Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.

function shortestString2() {
    let arr = document.getElementById("str10").value;
    arr = arr.split(",");
    let shortest = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < shortest) {
            shortest = arr[i].length;
        }
    }
    document.getElementById("result9").innerHTML = shortest;
}


//____________________________________________________________________________________
// Escribe una función que revise si una cadena de texto es un palíndromo o no.

function isPalindrome2() {
    let str = document.getElementById("str11").value;
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (str === str.split('').reverse().join('')) {
            document.getElementById("result10").innerHTML = true;
        } else {
        document.getElementById("result10").innerHTML = false;
    }
}

//____________________________________________________________________________________
// Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético.

function sortStrings2() {
    let arr = document.getElementById("str12").value;
    arr = arr.split(",");
    arr = arr.sort();
    document.getElementById("result11").innerHTML = arr;
}


//____________________________________________________________________________________
// Escribe una función que reciba una lista de números y regrese una nueva lista con los números ordenados de menor a mayor.

function sortNumbers2() {
    let arr = document.getElementById("str13").value;
    arr = arr.split(",");
    arr = arr.sort(function(a, b) {
        return a - b;
    });
    document.getElementById("result12").innerHTML = arr;
}
//____________________________________________________________________________________
// Escribe una función que reciba una lista de números y regrese una nueva lista con los números ordenados de mayor a menor.

function sortNumbers22() {
    let arr = document.getElementById("str14").value;
    arr = arr.split(",");
    arr = arr.sort(function(a, b) {
        return b - a;
    });
    document.getElementById("result13").innerHTML = arr;
}

//____________________________________________________________________________________
// Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.

function isPowerOfTwo2() {
    let n = document.getElementById("str15").value;
    if ((n & (n - 1)) === 0) {
        document.getElementById("result14").innerHTML = true;
    } else {
        document.getElementById("result14").innerHTML = false;
    }
}
//____________________________________________________________________________________
// Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.

function sortDescending2() {
    let arr = document.getElementById("str16").value;
    arr = arr.split(",");
    arr = arr.sort(function(a, b) {
        return b - a;
    });
    document.getElementById("result15").innerHTML = arr;
}

//____________________________________________________________________________________
//____________________________________________________________________________________