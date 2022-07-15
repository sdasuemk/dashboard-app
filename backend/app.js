const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

//initialization of app
const app = express()

//database connection with mongoose
mongoose.connect('mongodb+srv://HeroVired:abcd@heroviredreact.6lmkh.mongodb.net/dashboard_app?retryWrites=true&w=majority')
.then(()=> console.log('success'))
.catch(()=> console.log('Error'))

//get schema model
const Userdata = require('./schema/userSchema')

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());



// create a new user in our database
app.post('/Register', async (req,res) => {
    try{
        const signUpData = new Userdata({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        const userSignupData = await signUpData.save(); // save data to database
        /* res.status(201).render(''); // success & render to homepage or target page */
        res.status(201).send({message:'Success!'}); // success & render to homepage or target page

    } catch (error){
        res.status(400).send(error);
    }
});

//SignIn & validation

app.post('/login', async (req,res) =>{
    try {

        const email = req.body.email;
        const password = req.body.password;

        const userEmail = await Userdata.findOne({email:email}); //email validate
        if(userEmail.password === password){ //password validate
            /* res.status(201).render('success') //login success --- render target page */
            res.status(201).send({message:'successful login', user:userEmail}) //login success 
        } else{
            res.send({message:"password is not matching!"}) // password error
        }

        
    } catch (error) {
        res.status(400).send({message:'Invalid one or more credential(s)'}); //both eail and password error   
    }
});

app.listen(4000,()=>{
    console.log('server is on 4000')
})