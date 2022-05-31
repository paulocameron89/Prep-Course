// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
return array [0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array [array.length - 1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  // expect(incrementarPorUno([10, 10, 16, 12])).toEqual([11, 11, 17, 13]);
    for (var i = 0; i < array.length; i++){
      array[i] = array[i] + 1
    }
    return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  // expect(agregarItemAlFinalDelArray([97, 100, 80, 55, 72, 94], 'Hola')).toEqual([97, 100, 80, 55, 72, 94, 'Hola']);
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // expect(agregarItemAlComienzoDelArray([10, 10, 16, 12], 10)).toEqual([10, 10, 10, 16, 12]);
  // Tu código:
  array.unshift(elemento)
  return array
}



function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // expect(dePalabrasAFrase(['Henry', 'JavaScript', 'Class'])).toBe('Henry JavaScript Class');
  // Tu código:
 return palabras.join (" ")
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // expect(arrayContiene([97, 100, 80, 55, 72, 94], 'Hola')).toBe(false);
  // Tu código:
  return array.includes(elemento)
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // expect(agregarNumeros([10, 10, 16])).toBe(36);
  // Tu código:
  var suma = 0;
  for (var i = 0; i < numeros.length; i++){
   suma = suma + numeros[i]
 }
 return suma
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // expect(promedioResultadosTest([10, 10, 16, 12])).toBe(12);
  // Tu código:
  var suma = 0;
  for (var i = 0; i < resultadosTest.length; i++){
   suma = suma + resultadosTest [i]
 }
 return suma / resultadosTest.length
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // expect(numeroMasGrande([10, 10, 16, 12])).toBe(16);
  // Tu código:
  var maximo = numeros[0];
  for(var i = 1; i < numeros.length; i++) {
    if(numeros[i] > maximo) { 
      maximo = numeros[i];
    }
  }
  return maximo;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
// const product = multiplicarArgumentos(5, 5); expect(product).toBe(25)
  // Escribe tu código aquí:
if (arguments.length < 1) return 0;
var producto = 1
for (i = 0; i < arguments.length; i++){
  producto = producto * arguments [i]
}
return producto
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí:
  // expect(cuentoElementos([97, 100, 190, 5, 7, 9])).toBe(3)
  let contador = 0
  for (let i = 0; i < arreglo.length; i++){
    if (arreglo[i] > 18){
      contador++
    }
  }
  return contador
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  // expect(diaDeLaSemana(3)).toBe("Es dia Laboral");
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7) {return "Es fin de semana"};
  return "Es dia Laboral"
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  // expect(empiezaConNueve(98)).toBe(true)
  //Escribe tu código aquí
  var num = n.toString()
  if (num.charAt (0) === "9") return true
  return false
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  // expect(todosIguales([97, 100, 190, 9])).toBe(false)
  //Escribe tu código aquí  
  for (var i = 0; i < arreglo.length - 1; i++) {
    if (arreglo[i] !== arreglo[i+1]) return false
  }
  return true
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  // Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // expect(mesesDelAño(ok)).toEqual(["Marzo", "Noviembre", "Enero"]);
  // expect(mesesDelAño(wrong)).toEqual("No se encontraron los meses pedidos");
  // Tu código:
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre" ) {
      newArray.push (array[i]);
    }
  }
  if (newArray.length < 3) return "No se encontraron los meses pedidos";
  return newArray
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // expect(mayorACien(integers)).toEqual([200, 120, 160, 148]);
  // Tu código:
  var newArray = [];
  for (var i = 0; i < array.length; i++){
      if (array[i] > 100) {
        newArray.push (array [i])
      }
    }
    return newArray;
}



function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // expect(breakStatement(50)).toEqual([52, 54, 56, 58, 60, 62, 64, 66, 68, 70]);
  // Tu código:
  var array = [];
  var suma = numero;
  for (var i = 0; i < 10; i++) {
    suma += 2;
    if (suma === i) break; 
    else {
      array.push (suma);
    }
  }
  if (i<10) return "Se interrumpió la ejecución";
  return array
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // expect(continueStatement(50)).toEqual([52, 54, 56, 58, 60, 62, 64, 66, 68])
  // Tu código:
  var array = [];
  var suma = numero;
  for (var i = 0; i < 10; i++) {
    if (i === 5) continue;
    else {
      suma += 2;
      array.push (suma);
    }
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
