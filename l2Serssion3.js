db.products.find({
    tags: {
        $in: ["dolor", "labore"]
    }
}).project({ tags: 1 })

    db.orders.aggregate([
        //stage 1
        {
            $skip: 23
        },
        {
            $match: {
                $or: [
                    { status: "Cancelled" },
                    { total_price: { $gt: 25000 } }
                ]
            }
        },  
    ])

    db.orders.aggregate([
        // stage 1
        {
            $match: { status: "Shipped" }

        },
        //stage 2
        {
            $facet: {
                // pipeline 1
                "totalSale": [
                    //stage 1
                    {
                        $project: {
                            totalPrice: {
                                $sum: {
                                    $map: {
                                        input: "$products",
                                        as: "product",
                                        in: { $multiply: ["$$product.quantity", "$$product.price_per_unit"] }
                                    }
                                }
                            }
                        }
                    },
                    // stage 2
                    {
                        $group: { _id: null, totalAmount: { $sum: "$totalPrice" } }
                    },
                    //stage 3
                    {
                        $project: { _id: 0, totalAmount: 1 }
                    }

                ],
                "totalAvg": [
                    //stage-1
                    {
                        $project: {
                            avgTotal: {
                                $avg: {
                                    $sum: {
                                        $map: {
                                            input: "$products",
                                            as: "product",
                                            in: { $multiply: ["$$product.quantity", "$$product.price_per_unit"] }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    //stage-2
                    { 
                        $group: { _id: null, totalAvgAmount: {$avg: "$avgTotal"}}
                    },
                    // stage-3
                    {
                        $project: {
                            _id: 0,
                            
                        }
                    }
                ]
            }
        }
    ])