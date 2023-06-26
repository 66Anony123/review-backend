module.exports.postController = (req,res)=>{

    res.send('m fook');
}

module.exports.updateController =(req,res)=>{

    const {id} = req.params;
    
    console.log(id);
    res.status(200).send(`HI my id :${id}`);
}