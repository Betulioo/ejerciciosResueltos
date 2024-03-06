// Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada
// `removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio)
// llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de
// javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.
const myArray = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];


const findArrayIndex = (array, text) => {
  return array.indexOf(text);
};

let indexOf = findArrayIndex(myArray, "Caracol");


const removeItem = (array, text) => {
    
    array.splice(text, 1);
}
removeItem(myArray, indexOf);
console.log(myArray);