const numbers = [2, 4, 5, 4];
// console.log(numbers[0]);
// console.log(numbers.length);

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i]
    // console.log(number);
};

function add1 (num1, num2) {
    return num1 + num2
}

const result = add1(2, 4)
// console.log(result);

const user = {
    name: "jisn",
    roll: 43,
    movies: [3, 5],
    age: 23
}
const myVar = 'age'

console.log(user.name);
console.log(user['roll']);
console.log(user[myVar]);
