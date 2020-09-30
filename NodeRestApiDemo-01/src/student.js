const express = require('express')
const router = express.Router();
const Student=require('./model');


router.get('/', async(req,res) => {
    try{
           const stu = await Student.find()
           res.json(stu)
    }catch(err){
        res.send('Error ' + err)
    }
});


router.patch('/:id',async(req,res)=> {
    try{
        const stu = await Student.findById(req.params.id) 
        stu.sub = req.body.sub
        const a1 = await stu.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }})





router.post('/', async(req,res) => {
    const stu = new Student({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 =  await stu.save() 
        res.json(a1)
    }catch(err){
        res.send(err)
       console.log("error is "+err);
    }
})


module.exports = router