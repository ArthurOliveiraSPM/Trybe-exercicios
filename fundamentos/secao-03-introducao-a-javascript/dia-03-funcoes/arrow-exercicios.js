const sumArray =(array) => {
// function sumArray(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum = sum + array[index];
    }
    return sum;
};

console.log(sumArray([10,20,30,40,50]));
console.log(sumArray([89,3,67,128,1]));



const countWords = (phrase) => phrase.split(' ').length;


console.log(countWords('Fala tribo, beleza?'));