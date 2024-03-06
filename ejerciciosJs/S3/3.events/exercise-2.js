const input$$ = document.querySelector("input");

// input$$.addEventListener("focus", (e) => {
    
//     console.log(e.target.value);
// });

const focusEvent = (e) => {
    console.log(e.target.value);
    
}

input$$.onfocus = focusEvent;