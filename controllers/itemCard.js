const getAllItemsCards = (req, res, next) =>{
    res.send('Get all Items Cards!')
}

const addNewItemCard = (req, res, next) =>{
    res.send('Add New Item Card!')
}

module.exports = {getAllItemsCards, addNewItemCard}