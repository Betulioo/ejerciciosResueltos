const divs$$ = document.querySelectorAll(".fn-insert-here");


for (let i = 0; i < divs$$.length; i++) {
    const p$$ = document.createElement("p");
    p$$.textContent = "Voy dentro!";
    const element = divs$$[i];

    element.appendChild(p$$)
    
}