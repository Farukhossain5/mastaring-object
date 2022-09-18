const numbers = [11, 34, 65, 35, 76, 66];
for  (const number of numbers) {
    // console.log(number);
}

const bottle = { color: 'yellow', price: 50, isClened: true, capacity: 1 }
const keys = Object.keys(bottle);
const values = Object.values(bottle);
// console.log(keys)
// console.log(values);
/*
3. ways to read object properties bottle
1. bottle.color
2. bottle['color']
3. bottle[key]

 */

for (const key in bottle) {
    const value = bottle[key];
    // console.log(key, value);
}
