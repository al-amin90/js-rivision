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
// console.log(studentObject);
const keys = Object.keys(user);
const values = Object.values(user);
// console.log(keys);

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

// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data))


// truty--- 'jisan'  34, true, {}. []
// falsy--- '', 0, false, null, undefine

let mye = 4;
if(!mye){

}

const money = 800;
let food;

const result1 = money > 100 ? 'brianyi kabo' : 'cha bisvut kabo';
let drink = (money > 100 && mye > 100) ? "coke" : "pani"
// console.log(drink);

const num2 = '34';
// console.log(parseInt(num2));

const isAvtive = false;
const showUser = () => console.log("display user");
const hideUser = () => console.log("hide user");
isAvtive ? showUser() : hideUser()
isAvtive && showUser()
!isAvtive || hideUser()