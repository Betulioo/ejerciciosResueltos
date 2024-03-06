// Usa un foin para imprimir por consola los datos del alienigena.
// ```js
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
// ```

for (const key in alien) {
    const data = alien[key];
    console.log(key);
    console.log(data);
    
}