const express =require('express')
const router = express.Router()
const itemCard = require('../controllers/itemCard.js')


router.get('/', itemCard.getAllItemsCards)

router.post('/', itemCard.addNewItemCard)

module.exports = router