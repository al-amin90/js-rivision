// match
db.pertice2.aggregate([
    //stage 1
    { $match: { gender: "Male", age: { $lt: 30 } } },
    //stage 2
    { $project: { gender: 1, name: 1 } },
])

// -------- $addFields , $out , $merge aggregation stage -----------
db.pertice2.aggregate([
    //stage 1
    { $match: { gender: "Male" } },
    //stage 2
    { $addFields: {cource: "Level-2", eduTech: "Programming Hero", moneMoto: "moner issa"}}, // original doc modifi korbe na 
    //stage 3
    // {$project: {eduTech: 1, cource: 1}},
    //stage 4
    {$out: "course-student"}, //  aggregation ar data diye new akta collection make hobe
    {$merge: "pertice2"} // ata original doc modify korbe
])

// -------- $group , $sum , $push aggregation stage ----------- 
db.pertice2.aggregate([
    //stage 1 _id diya lagbe group korte 
    { $group: { 
        _id: "$address.country", 
        count: {$sum: 1} , 
        fullDoc: {$push: "$$ROOT"}} //joko akta push korte parbe
        
    },  // poti gender ar ke group kore dise
    
    //stage 2
    {
        $project: {
            count: 1,
            "fullDoc.name": 1, 
            "fullDoc.email": 1, 
            "fullDoc.phone": 1, 
        }
    }
])
 
// -------- explore more about $group & $project ----------- 
db.pertice2.aggregate([

    // stage 1
    {
        $group: {
            _id: null, // sob gulo doc te ak sate korse / 1 ta korse
            totalSalary: {$sum: "$salary" } ,
            maxSalary: { $max: "$salary"} ,
            minSalary: { $min: "$salary"},
            avgSalary: { $avg: "$salary"}
        }
    },
    // stage 2
    {
        $project: {
              totalSalary: 1,
              maxSalary: 1,
              minSalary: 1,
              totalCost: 1,
              averageSalry: "$avgSalary",
              rangeBetweenMinMax: {$subtract: ["$maxSalary", "$minSalary"]},
              totalCosts: { $add: ["$maxSalary", "$minSalary"]}
        }
    }
])
