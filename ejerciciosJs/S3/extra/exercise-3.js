const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const div$$ = document.querySelector('[data-function="printHere"]');

const ul$$ = document.createElement("ul");

for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    const li$$ = document.createElement("li");
    li$$.textContent = car;

    ul$$.appendChild(li$$);
}

div$$.appendChild(ul$$);