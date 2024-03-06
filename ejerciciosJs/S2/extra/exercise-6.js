// Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá
// intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array
// resultante.
["Mesirve", "Cristiano Romualdo", "Fernando Muralla", "Ronalguiño"];
// Sugerencia de array:
// ````js
//
// ````

let newArray = [];
const findArrayIndex = (array, text) => {
  return array.indexOf(text);
};


function swap(array, text1, text2) {
  let indexOf1 = findArrayIndex(array, text1);
  let indexOf2 = findArrayIndex(array, text2);

  let temp = array[indexOf1];
  array[indexOf1] = array[indexOf2];
  array[indexOf2] = temp;
  return array;
}

console.log(
  swap(
    ["Mesirve", "Cristiano Romualdo", "Fernando Muralla", "Ronalguiño"],
    "Cristiano Romualdo",
    "Ronalguiño"
  )
);
