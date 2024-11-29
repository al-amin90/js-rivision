db.test.find(
    {
        gender: "Female",
        age: { $nin: [18, 20, 22, 30] },
        interests: { $in: ["Cooking"] },
    },
    { age: 1, gender: 1, interests: 1 }).sort({
        age: 1
    })

db.test.find({
    $or: [
        { interests: "Cooking" },
        { interests: "Gameing" },
    ]
}).project({ age: 1, interests: 1 }).sort({ age: 1 })


// Explict and
db.test.find({"skills.name": {$in: [ "JAVASCRIPT", "PYTHON"] } }).project({ "name.firstName": 1, skills : 1 }).sort({ age: 1 })

// exists operator
db.test.find({company : {$exists: true}}) 

// type operator
db.test.find({company : {$type: "null"}}).project({friends: 1})
        
// position kore kuje doc dibe
db.test.find({"interests.2" : "Cooking"}).project({interests: 1})

// position ignor kore arr thaka all valur thaklei doc dibe
db.test.find({interests : {$all: [ "Travelling", "Gaming", "Reading" ]}}).project({interests: 1})

// kono obj ar element match korar konno arry teo kaj kore
db.test.find(
    {
        skills: {
            $elemMatch: {
                "name": "JAVASCRIPT",
                "level": "Intermidiate"
            }
        }

    }
).project({ skills: 1 })
//"skills" : [
// 		{
// 			"name" : "JAVASCRIPT",
// 			"level" : "Intermidiate",
// 			"isLearning" : false
// 		},
// 		{
// 			"name" : "KOTLIN",
// 			"level" : "Intermidiate",
// 			"isLearning" : false
// 		},]

//entire set replace korar jonno $set use
db.test.updateOne(
    { _id: ObjectId("6406ad63fc13ae5a40000065") },
    {
        $set: {
            interests: ["Gameing", "Writing", "Reading"]
        }
    }
)

//ata new ta array modde set kore debe but duplicate hobe na
db.test.updateOne(
    { _id: ObjectId("6406ad63fc13ae5a40000065") },
    {
        $addToSet: {
            interests: "Sleeping"}
            interests: {$each: ["Praying", "Power Nap"]} // aker odik add korte chaile
        },
        $push: {
            interests: {$each: ["Praying", "Power Nap"]} // aker odik push korte chaile
        }
    }
)

//kono property ke unset ba delete kora $unset use
db.test.updateOne(
    {_id: ObjectId("6406ad63fc13ae5a40000065") }, 
    {$unset: {age: 1 }}
    )

//arr pop -1 korle first theke and 1 last
db.test.updateOne(
    {_id: ObjectId("6406ad63fc13ae5a40000065") }, 
    {$pop: {friends: 1 }}
    )

//pull kore delete kora
db.test.updateOne(
    {_id: ObjectId("6406ad63fc13ae5a40000065") }, 
    {$pull: {friends: "Fahim Ahammed Firoz" }}
    )

    //object ar ketre set advance used
db.test.updateOne(
    {_id: ObjectId("6406ad63fc13ae5a40000065") }, 
    {$set: {
        "address.city": "dhaka",
        "address.country": "bangladesh",
        "address.postalCode": "000"
    } }
    )

//array of object update korar jonno use korar jonno
db.test.updateOne(
    { _id: ObjectId("6406ad63fc13ae5a40000065"), "education.major": "Communications" },
    {
        $set: {
            "education.$.year": 2000
        }
    }
)

//increment property
db.test.updateOne(
    { _id: ObjectId("6406ad63fc13ae5a40000065") },
    {
        $inc: {
            age: 1
        }
    }
)

// create collection
db.createCollection("posts")

// delete collection
db.posts.drop( { writeConcern: { w: 1 } } )

