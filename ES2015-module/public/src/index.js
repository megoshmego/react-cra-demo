import { fruits } from './foods.js';
import { choice, remove } from './helpers.js';

const selectedFruit = choice(fruits);


console.log(`I'd like one ${selectedFruit}, please.`);


console.log(`Here you go: ${selectedFruit}`);


console.log('Delicious! May I have another?');


remove(fruits, selectedFruit);


console.log(`I'm sorry, we're all out. We have ${fruits.length} fruits left.`);
