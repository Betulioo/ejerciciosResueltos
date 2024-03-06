// Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.

// ```js
const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];
// ```

alumns.forEach((alumm) => {
  alumm.counter = 0;
  alumm.isApproved = false;
  if (alumm.T1 === true) {
    alumm.counter += 1;
  }
  if (alumm.T2 === true) {
    alumm.counter += 1;
  }
  if (alumm.T3 === true) {
    alumm.counter += 1;
  }

  if (alumm.counter >= 2) {
    alumm.isApproved = true;
  }
});

console.log(alumns);
