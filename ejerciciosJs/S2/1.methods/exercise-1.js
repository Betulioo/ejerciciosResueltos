// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

// ```js

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
  "Otra Camiseta",
];

products.forEach((product) => {
  productlower = product.toLowerCase();
  if (productlower.includes("camiseta")) {
    // console.log(product);
  }
});

//forEach escrito con arrow

products.forEach((elelemento) => {
  // console.log(elelemento);
});

//forEach escrito con funcion normal
products.forEach(function (elemento) {
  if (elemento.includes("Camiseta")) {
    // console.log(elemento);
  }
});

// const palabraParaBuscar = "Camiseta";

for (let index = 0; index < products.length; index++) {
  const element = products[index];
  if (products.includes("Camiseta")) {
    // console.log("La condicion es true y el elemento es " + element);
  }
}

for (const elemento of products) {
  if (elemento.includes("Camiseta")) {
    console.log(elemento);
  }
}
