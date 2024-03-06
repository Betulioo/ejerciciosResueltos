const input$$ = document.querySelector("input");

input$$.addEventListener("input", (e) => {

    console.log(e.target.value);
});

// const focusEvent = (e) => {
//   console.log(e.target.value);
// };

// input$$.oninput = focusEvent;
