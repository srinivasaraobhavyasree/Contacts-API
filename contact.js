const express= require ('express')

const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/contacts')
 
const contactSchema=new mongoose.Schema ({
    name:String,
    email:String,
    phone:String
})

const Contact = mongoose.model('contact', contactSchema)

app.use(express.json(Contact))

app.get("/contact", async(req, res)=>{
    try{

        const contact = await Contact.find()
        res.json(Contact)

    } catch(error){
        res.status(500).json({message: error.message})
    }
})

app.get("/contact/:id", async (req, res)=>{

    try{

        const contact = await Contact.findById(req.params.id);

        res.json(contact)

    }catch (error){
        res.status(500).json({message: error.message})
    }
    
})

app.post("/contact", async (req, res)=>{

    const contact = new Contact ({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone
    })
    try{

        const newContact = await contact.save()
        res.status(201).json(newContact)

    }catch(error){

        res.status(500).json({message:error.message})

    }
        
    
})

app.put("/contact/:id", async(req, res)=>{
    try{

        const contact= await Contact.findByIdAndUpdate(req.params.id,{
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone
        })
        res.json(contact)

    }catch(error){

        res.status(500).json({message:error.message})
    }
})

app.delete("/contact/:id", async(req,res)=>{

    try{
        const contact= await Contact.findByIdAndDelete(req.params.id);

        res.json({message:"Delete Sucessfully"})

    }catch(error){
        res.status(500).json({message: error.message})
    }
})


app.listen(3000, ()=>{
    console.log("Server is running ")
})
