const router = require('express').Router();
const {Character}= require('./db');

// grabs all characters
router.get('/', async (req, res, next)=>{
    try{
        const characters = await Character.findAll();
        res.send(characters)
    } catch(e){
        next(e)
    }
})

// grabs character by id
router.get('/:id', async (req,res,next)=>{
    try {
        const character = await Character.findByPk(req.params.id);
        res.send(character);
    }catch(e){
        next(e);
    }
})



module.exports = router;

