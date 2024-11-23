const orderNo = 1;
const firstOrder = orderNo.toString().padStart(4, "0");
const secondOrder = (parseInt(firstOrder) + 1).toString().padStart(4, "0")
// console.log(secondOrder);

let mangoPot = 0;

for(let i = 1; i <= 3; i++){
    mangoPot = mangoPot + 1;
}
// console.log(mangoPot);

const names = ['mir', 'mezba', 'jisan', 'kuddus'];

for(let i=0 ; i < names.length; i++){
    // console.log(`Welcome to level2 ${names[i]}`);
}

for(let mentor of names){
    // console.log(`Welcome to level2 ${mentor}`);
}

const mentor = {
    name: "mir",
    age: 23,
    isMentor: true
}
for(let key in mentor){
    // console.log(mentor[key]);
}
// console.log(mentor["age"]);


function randomFunction(fn){
    return fn(2)
}
function randomFunction(fn){
    return fn(2)
}

randomFunction((number) => {
    console.log(3 + number);
})