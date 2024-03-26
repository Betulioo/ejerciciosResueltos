const button$$ = document.querySelector("#btnToClick");

// button$$.addEventListener("click", (e) => {
//     console.log(e);
// });

const a = (e) => {
  console.log(e);
};

// button$$.onclick = eventoClick;
button$$.oninput = a;

button$$.addEventListener("input", a);
