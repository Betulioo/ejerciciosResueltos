// // Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra
// //  introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// //   introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

// ````js
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
// ````

const input$$ = document.querySelector('[data-function="toFilterStreamers"]');
// const input2$$ = document.querySelector("input");

input$$.addEventListener("input", function (evento) {
  const valorDeInput = evento.target.value;

  console.log(evento);
  // console.log(valorDeInput);

  // const arrayNuevoFilter = streamers.filter(function (elemento) {
  //   return elemento.name.includes(valorDeInput);
  // });

  // const arrayNuevoFilterArrow = streamers.filter((elemento) =>
  //   elemento.name.includes(valorDeInput)
  // );

  // console.log(arrayNuevoFilter);
});

// function nombreFuncion(parametro) {
//   if (parametro === undefined) {
//     return;
//   }
//   console.log("mi funcion " + parametro);
//   // console.log(parametro2);
// }

// nombreFuncion("mi parametro"); //console.log("mi funcion");

// const input$$ = document.querySelector("input");
// const p$$ = document.createElement("p");
// const body = document.body;

// input$$.addEventListener("input", (e) => {
//   let prompt = e.target.value.toLowerCase();

//   const filtered = streamers.filter((streamer) =>
//     streamer.name.toLowerCase().includes(`${prompt}`)
//     );

//     filtered.forEach(element => {
//   p$$.textContent = `Name: ${element.name} Age: ${element.age} Game More Played: ${element.gameMorePlayed}`;

//     });

// });
// body.appendChild(p$$);
