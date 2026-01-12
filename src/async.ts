import fs from 'fs';

fs.readFile('food.txt', 'utf8', (err: NodeJS.ErrnoException | null, fileContents: string) => {
    if (err) {
        console.log('Cannot find the food');
    }
    else {
        console.log(fileContents);
    }
});
console.log('We ate this');

fs.readFile('drinks.txt', 'utf8', (err: NodeJS.ErrnoException | null, fileContents: string) => {
    if (err) {
        console.log('Cannot find the drinks');
    }
    else {
        console.log(fileContents);
    }
});
console.log('We drank this');