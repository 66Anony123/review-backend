const express =require('express');
const app = express();
const mongoose= require('mongoose');
const cors = require('cors'); 
const bodyParser= require('body-parser');
const route = require('../review-backend/routes/routes')
const multer =require('multer');
const path = require('path');


app.use(cors({
origin:'*'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));





const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,path.join(_dirname,'../public/Images'),(error,success)=>{
            if(error){
                console.log("Here your destination error:",error);
            }
        } )
    },
    filename:function(req,file,cb){
        const Fname=Date.now()+'-'+file.originalname;
cb(null,Fname,function(error,success){
    if(error)
    {
console.log("Here your filename error:",error)
    }
})
}
})

const upload = multer({storage:storage});


app.use('/api/auth',route);

mongoose.connect('mongodb://127.0.0.1:27017/review-bcknd')
.then(()=>{console.log("Database connected successfully")})
.catch((error)=>{console.log("DB err:",error.message)})

app.listen(5000,()=>{
    console.log("Server is running in port 5000");
})

