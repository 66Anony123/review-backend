
const {postController,updateController} = require('../controllers/userControllers');
const router = require('express').Router();

router.post('/post',postController);

router.get('/update/:id',updateController);

router.get('/post',(req,res)=>{

    console.log("gg");
    res.send('hh');
});


module.exports =router;