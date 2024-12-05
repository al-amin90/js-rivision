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
    { $addFields: { cource: "Level-2", eduTech: "Programming Hero", moneMoto: "moner issa" } }, // original doc modifi korbe na 
    //stage 3
    // {$project: {eduTech: 1, cource: 1}},
    //stage 4
    { $out: "course-student" }, //  aggregation ar data diye new akta collection make hobe
    { $merge: "pertice2" } // ata original doc modify korbe
])

// -------- $group , $sum , $push aggregation stage ----------- 
db.pertice2.aggregate([
    //stage 1 _id diya lagbe group korte 
    {
        $group: {
            _id: "$address.country",
            count: { $sum: 1 },
            fullDoc: { $push: "$$ROOT" }
        } //joko akta push korte parbe

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
            totalSalary: { $sum: "$salary" },
            maxSalary: { $max: "$salary" },
            minSalary: { $min: "$salary" },
            avgSalary: { $avg: "$salary" }
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
            rangeBetweenMinMax: { $subtract: ["$maxSalary", "$minSalary"] },
            totalCosts: { $add: ["$maxSalary", "$minSalary"] }
        }
    }
])

db.pertice2.aggregate([
    //stage 1
    { $unwind: "$friends" }, // arr ke sob doc ar fri ar element alada doc banabe

    // stage 2
    { $group: { _id: "$friends", count: { $sum: 1 } } }

])

// poti age ar common interes ber kora
db.pertice2.aggregate([
    //stage 1
    {
        $unwind: "$interests"

    },
    //stage 2
    {
        $group: { _id: "$age", count: { $sum: 1 }, interesPerPerson: { $push: "$interests" } }

    }
])
// answer: 
{
    "_id" : 50,
        "count" : 6,
            "interesPerPerson" : [
                "Gaming",
                "Cooking",
                "Writing",
                "Reading",
                "Cooking",
                "Writing"
            ]
}

//-------------- $bucket, $sort, and $limit aggregation stage ---------------
db.pertice2.aggregate([
    //stage 1
    {
        $bucket: { // akane boundari kore group korte pari
            groupBy: "$age",
            boundaries: [20, 40, 60, 80],
            default: "80 upor ar bora gula",
            output: {
                count: { $sum: 1 },
                karakaraAse: { $push: "$$ROOT" }
            }
        }
    },
    //stage 2
    {
        $sort: { count: 1 }
    },
    //stage 3
    {
        $limit: 2
    },
    //stage 4
    {
        $project: { count: 1 }
    }
])

//-------------- $facet, multiple pipeline aggregation stage ---------------
db.pertice2.aggregate([
    {
        $facet: {
            //pipeline-1
            "countFriends": [
                //stage 1
                { $unwind: "$friends" },
                // stage 2
                { $group: { _id: "$friends", count: { $sum: 1 } } }
            ],
            //pipeline-2
            "countEducation": [
                //stage 1
                { $unwind: "$education" },
                //stage 2
                { $group: { _id: "$education", count: { $sum: 1 } } }
            ],
            //pipeline-3
            "countSkills": [
                //stage 1
                { $unwind: "$skills" },
                { $group: { _id: "$skills", count: { $sum: 1 } } }
            ]
        }
    }
])

//-------------- $lookup stage, embedding vs referencing ---------------
db.orders.aggregate([
    {   // ata 2 ta collection data ke join kore data dibe
        $lookup: {
            from: "pertice2",
            localField: "userId",
            foreignField: "_id",
            as: "user"
        }
    }

])

//-------------- What is indexing, COLLSCAN vs IXSCAN ---------------
// create new filed make a index, index korle direct oi doc find korbe collscan korbe na
db.getCollection("massive-data").createIndex({email: 1})
db.getCollection("massive-data").dropIndex({email: 1})//index delete ar jonno

//-------------- Explore compound index and text index ---------------
//compaund scan {gender: "Male", age: 20}
// create single word index in a filed
db.getCollection("massive-data").createIndex({about: "text"})
db.getCollection("massive-data").find( {$text: { $search: "dolor" }  }).project({about: 1})




