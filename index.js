const express= require('express')
const multer = require('multer')

//folders declare
const UPLOADS_FOLDER = "./uploads/";
var upload= multer({
 dest: UPLOADS_FOLDER,
 limits: {
    fileSize: 100000, //byte
 },
 fileFilter:(req,file,cb) => {
    //console.log("file") // information of file
    if(
        file.mimetype== "image/png" ||
        file.mimetype=="image/jpg" ||
        file.mimetype== "image/jpeg" 
    ){
        cb(null,true);
    }else{
        cb(new error(("only jp")))
    }
    },
  });

const app =express();

//single data
app.post("/", upload.single("avatar"), (req,res)=>{
 res.send('uploaded')
})
//multiple data maxcount here 3
app.post("/", upload.array("avatar", 3), (req,res)=>{
    res.send('uploaded')
   })

   //multiple data with array of object
   app.post("/", upload.fields(
    {name:"avatar", maxCount: 3 },
    {name: "gallary", maxCount: 3},
    ), (req,res)=>{
    res.send('uploaded')
   })
//application route 
app.listen(3000, ()=>{
    console.log("listening from sarans port 3000")
})