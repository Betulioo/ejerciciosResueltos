// Dado el siguiente array, usa .find() para econtrar el número 100.

// ```js
const numbers = [32, 21, 63, 95, 100, 67, 43, 100];
// ```

// const finded = numbers.find((number) => number === 100);

// console.log(finded);

const pepito = numbers.find(function (number) {
  return number === 100;
});

console.log(pepito);
