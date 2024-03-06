// Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.


const p$$ = document.createElement("p");
p$$.textContent = 'Voy en medio!';

const divs$$ = document.querySelectorAll("div");

document.body.insertBefore(p$$, divs$$[1]);