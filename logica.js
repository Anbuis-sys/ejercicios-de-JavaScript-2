//*Ejercicio 1 Perfil del usuario

// Función para obtener la información del usuario

 function UserData() {

    let nombre = prompt("¿Cual es tu nombre:");
    let edad = prompt("¿Cual es tu edad:");
    let films = [];

    while (true) {
        let film = prompt("Ingresa una de tus películas favoritas (o deja en blanco para terminar):"); 
        if (film === "") break; ///se utiliza un bucle while (true) para seguir pidiendo películas hasta que el usuario deje el campo en blanco.
        films.push(film); //Permite ir agregando los nuevos elementos al arreglo de "films"
    }

    return {
        nomre: nombre,
        edad: edad,
        films: films
    };
}

// Función para mostrar la información del usuario
function mostrar(userInfo) {

    console.log(`Nombre de usuario: ${userInfo.nombre}`);
    console.log(`Edad: ${userInfo.edad}`);
    console.log(`peliculas favoritas ${userInfo.films}`);

    userInfo.films.forEach(film => {
    
        console.log(`La película ${film} es una de mis favoritas.`); 
    });
}

// Solicitar la información del usuario y mostrarla
let userInfo = UserData();
mostrar(userInfo);


//*Ejercicio 2 Número más alto

function hallarMayor() {

    let maximos = -Infinity; // Inicializa con el valor más bajo posible
    //-Infinty representa un valor menor que cualquier otro numero, bajo el contexto de comparaciones determina si un valor es menor qque cualquier otro
    for (let i = 0; i < 10; i++) {

        let num = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
        while (isNaN(num)) { //parseFloat convierte una cadena de texto en numeros flotantes. Ejem parseFloat("4.9") devuelve 4.9
            num = parseFloat(prompt(`Entrada no válida. Ingresa el número ${i + 1}:`));
        } 
        if (num > maximos) {
            maximos = num;
        }
    }
    return maximos;
}

let numMayor = hallarMayor();
console.log(`El mayor de los números ingresados es: ${numMayor}`);

//* Ejercicio 3 Alarma

 // Solicitar la cantidad de segundos al usuario
 let seconds = parseInt(prompt("Ingresa la cantidad de segundos hasta que se ejecute la alarma:"), 10); //ParseInt convierte una cadena de texto en un numero entero. Ejem: parseInt ("123") devuelve 123

 // Validar que la entrada es un número válido
 while (isNaN(seconds) || seconds <= 0) {
     seconds = parseInt(prompt("Entrada no válida. Ingresa un número entero positivo para los segundos:"), 10);
 }

 // Solicitar el mensaje que se mostrará
 let message = prompt("¿ Que mensaje te gustaria que se mostrara?");

 // Configurar la alarma
 setTimeout(() => {
     alert(message);
 }, seconds * 1000); // Convertir segundos a milisegundos

 console.log(`Alarma configurada para ${seconds} segundos.`);

 //*Ejercicio 5 Palindromo

 function esPalindromo(str) {

    // Convertir la cadena a minúsculas y eliminar espacios y puntuación
    let palabra = str.toLowerCase().replace(/[\W_]/g, '');
    //str.toLowerCase() convierte la cadena a minusculas
    //replace(/[\W_]/g, '') reemplaza todos los caracteres de la expresion /[\W_]/g por una cadena vacia
    //Esta expresion se refiere a las "w" y ""


    // Verificar si la cadena limpia es igual a su reverso
    let reversa = palabra.split('').reverse().join('');
    //.split divide la cadena por caracteres
    //.reverse invierte el orden de los elementos
    //..join une los elementos en una cadena 

    return palabra === reversa;
}

// Solicitar la palabra o frase al usuario
let input = prompt("Ingresa una palabra o frase:");



// Determinar si es un palíndromo
if (esPalindromo(input)) {
    console.log("La palabra o frase ingresada es un palíndromo.");
} else {
    console.log("La palabra o frase ingresada no es un palíndromo.");
}

//*Ejercicio 6 Factorial

function factorial(n) {

    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Solicitar un número entero al usuario
let n = parseInt(prompt("Ingresa un número entero"), 10);

let result = factorial(n);

        // Mostrar el resultado en la consola
        console.log(`El factorial de ${n} es: ${result}`);


//*Ejercicio 6 Matriz plana        

// Función recursiva para aplanar una matriz anidada
function flatten(arr) {
    //flatten aplana un arreglo  multidimensional 

    let res = [];
    arr.forEach(elemento => {
        if (Array.isArray(elemento)) {
            res = res.concat(flatten(elemento));
        } else {
            res.push(elemento);
        }
    });
    return res;
}

// Matriz anidada de ejemplo
let multiDimension = [1, [2, 3, [4, 5, [6]]]];

// Aplanar la matriz anidada
let matrizArr = flatten(multiDimension);
console.log(matrizArr); 

