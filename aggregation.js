// match
db.pertice2.aggregate([
    //stage 1
    { $match: { gender: "Male", age: { $lt: 30 } } },
    //stage 2
    { $project: { gender: 1, name: 1 } },
])

/// tommoro is my exam that why i am studying today...