// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la
// posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Sugerencia de función:
const array = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

// ```js
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
    }
    return -1
}

const findArrayIndex2 = (array, text) => {
  return array.indexOf(text)
}
// findArrayIndex2(array, "Mosquito");
console.log(findArrayIndex2(array, "Ajolote"));
// ```

// Ej array:
// ````js
// ````

// console.log(findArrayIndex(array, "Salamandra"));
