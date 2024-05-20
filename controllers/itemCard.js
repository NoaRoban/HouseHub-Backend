const ItemCard = require('../models/itemCard_model')
const getAllItemsCards = (req, res, next) =>{
    res.send('Get all Items Cards!')
}

const addNewItemCard = async(req, res, next) =>{
    console.log(req.body)

    const req_description = req.body.description
    const req_fullAddress= req.body.fullAddress
    const req_price = req.body.price
    const req_house_size = req.body.house_size
    
    const itemCard = new ItemCard({ 
        description: req_description,
        fullAddress: req_fullAddress,
        price: req_price,
        house_size: req_house_size
    })
    
    try {
        const newItemCard = await itemCard.save()
        console.log("item is saved in DB")
        res.send("added new item card")
    } catch (error) {
        console.log("Failed to save item in DB", error);
        res.status(500).send("Failed to save item in DB");
    }


}

module.exports = {getAllItemsCards, addNewItemCard}