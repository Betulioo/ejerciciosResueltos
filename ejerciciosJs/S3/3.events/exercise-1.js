const button$$ = document.querySelector("#btnToClick");

// button$$.addEventListener("click", (e) => {
//     console.log(e);
// });

const eventoClick = (e) => {
  console.log(e);
};

button$$.onclick = eventoClick;
