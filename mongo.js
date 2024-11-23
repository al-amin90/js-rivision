—-------------------------------- Mongoose operator —--------------------------------
db.test.find({age: {$eq: 12}}) → operator use ar tum rule je {} use kora
db.test.find({age: {$ne: 12}})  → not equal
db.test.find({age: {$gt: 30 }}) → gether tha 
db.test.find({age: {$lte: 30 }}).sort({age: -1}) → sort decending
db.test.find({age: {$lt: 30 }}) → less than
db.test.find({age: {$lte: 30 }})  → less than equal

db.test.find(
    { 
        gender: { $eq: "Female" }, 
        age: {$gte: 18 , $nin : [18, 20, 22, 26, 30] } ,
        interests: {$in: ["Cooking", "Gaming"] }
    },
    { age: 1, gender: 1 , interests: 1}  → implicit and , coma diye and korci
).sort({ age: 1 })

—------------------------------------------ Explicit and —-------------------------------------------
db.test.find({ $and: [
      {gender: "Female"},
      {age: {$ne: 15}}, 
      {age: {$lte: 30}}
    ] 
    
}).project({
    age: 1, 
    gender: 1
}).sort({age: 1})

—------------------------------------------ Explicit $or—-------------------------------------------
db.test.find({ 
    $or: [ → chaile implicit $or ar jonno $in use korte pari
      {"skills.name": "JAVASCRIPT"},
      {"skills.name": "PYTHON"},
    ] 
    
}).project({
    skills: 1
})

—------------------------------------------ not operator—-------------------------------------------
db.test.find({
    age:
        { $not: { $ne: 15 } } —-------→ ja bola hobe tar ulta ta korbe
}).project({ age: 1 })

—------------------------------------------ nor operator—-------------------------------------------
db.test.find({
    $nor: [      —---------→ agula bad a sob gula dibe
        {"skills.name": "JAVASCRIPT"},
        {"skills.name": "RUBY"}
    ]
}).project({
    skills: 1
})
