const quantSobra = [10, 50, 200, 0];

// let sum = 0;
// for (let index = 0; index < quantSobra.length; index += 1) {
//     sum += quantSobra[index];
// }

const callback = (previousValue, currentValue) => {
    return previousValue += currentValue
}

const sum = quantSobra.reduce(callback, [])

console.log(sum); 

const voters = [
    { name: 'Bob', age: 30, voted: true }, // { Bob: true }
    { name: 'Jake', age: 32, voted: true }, // { Jake: true }
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 42, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false },
];


voters.reduce((previousValue, currentValue) => {
    previousValue[currentValue.name] = currentValue.voted
    return previousValue;
}, {})