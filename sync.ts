// use node's filesys lib to read text files
import fs from 'fs';

// read 1st file
const food: string = fs.readFileSync('food.txt', 'utf8');
console.log(food);
console.log('We ate this');

// read 2nd file
const drinks: string = fs.readFileSync('drinks.txt', 'utf8');
console.log(drinks);
console.log('We drank this');