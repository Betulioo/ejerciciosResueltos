// Dado el siguiente array, devuelve un array con sus nombres utilizando .map().

// ```js
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
// ```

// console.log(users.map((user) => user.name));

const arrayNuevoMap = users.map(function (user) {
  return { nombre: user.name, ide: user.id };
});

console.log(arrayNuevoMap);
