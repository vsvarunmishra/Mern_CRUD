const express = require('express');
const router = express.Router();
const SignIn = require('../Modal/SignIn');

router.get('/read', async (req, res) => {
    try {
        const data = await SignIn.find()
        res.json(data);
    } catch (err) {
        res.send(err);
    }
})

router.get('/readById/:id', async (req,res) => {
    try{
        const data = await SignIn.findById(req.params.id);
        res.json(data);
    }catch(e){
        res.send(e);
    }
})

router.post('/save', async (req, res) => {
    const data = new SignIn({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const rs = await data.save()
        res.send(rs);
    }catch(err){
        res.send(err)
    }
})

router.put('/update/:id', async(req,res) => {
    const id = req.params.id;
  
    try{
        const rs = await SignIn.findById(id);
        rs.firstName = req.body.firstName,
        rs.lastName = req.body.lastName,
        rs.email=req.body.email

        const rs1 =  await rs.save();
        res.json(rs1)
    }catch(err){
        res.send(err)
    }
   
})

router.delete('/delete/:id', async(req, res) => {
    const id = req.params.id;
    await SignIn.findByIdAndDelete(id).exec();
    res.send('deleted')
})

module.exports = router;