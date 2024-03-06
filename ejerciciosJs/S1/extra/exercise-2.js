// Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
// ```js
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];
// ```


for (const [index, food] of foodSchedule.entries()) {

    if (food.isVegan == false) {
        foodSchedule[index].name = fruits[index];
        foodSchedule[index].isVegan = true
    }
}
console.log(foodSchedule);