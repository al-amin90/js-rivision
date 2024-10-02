const numbers = [2, 4, 5, 4];
// console.log(numbers[0]);
// console.log(numbers.length);
const [x, y] = numbers;
// console.log(x, y);

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
const  {name, age} = user;
const stringifyJSON = JSON.stringify(user);
const studentObject = JSON.parse(stringifyJSON)
console.log(studentObject);

// console.log(name, age);
// console.log(user.name);
// console.log(user['roll']);
// console.log(user[myVar]);

const isEven = x => x % 2 == 0;
const numberss = [...numbers]  
numberss.push(0);
// console.log(numberss, numbers);
const output = numbers.filter( number => number <= 4);
const output2 = numbers.find( number => number <= 4);
// console.log(output2);

