const express=require('express');
const path=require('path');
const app=express();
const bodyParser = require('body-parser');
const fs = require('fs');
const port = process.env.PORT || 10167;

fs.writeFileSync('port.txt', parseInt(port) + 1);
app.use('/static',express.static('static')); // For serving static files    

app.use(express.json()); // To get the data from the form we use this
app.use(bodyParser.urlencoded({ extended: true })); // To get the data from the form we use this

// PUG SPECIFIC STUFF
app.set("view engine", "pug"); // Set the template engine as pug
// Set the templates directory
app.set('views', path.join(__dirname, 'templates'))




//ENDPOINTS

app.get('/',(req,res)=>{
    const con='This is the best content on the internet so far so use it wisely';
    console.log(req.body);
    const params={
        'title':'Adarsh is the best',
        'content':con,
        'alert':false
    }
    res.status(200).render("index.pug",params); 
});

app.post('/',(req,res)=>{
    const msg='Your Form Has Been Submitted Successfully And We Will Contact You Soon';
    const con='This is the best content on the internet so far so use it wisely';
    form = req.body;
    console.log(form);
    fs.appendFileSync('output.txt',`Name of the Client is ${form.name} , Email of the Client is ${form.email} , Phone Number of the Client is ${form.phone} \n  `);
    const params={
        'title':'Adarsh is the best',
        'msg':msg,
        'content': con,
        'alert':true
    }
    res.status(200).render("index.pug",params);
});


























// app.get('/',(req,res)=>{
//     res.status(200).send('Hello World in Express Made By Adarsh'); // send() is used to send the response 
// });
// app.get("/demo",(req,res)=>{
//     res.status(200).render('demo', { title: 'Hey Adarsh ', message: 'Hello there!' })

// });


// app.get('/about',(req,res)=>{
//     res.status(404).send('This is About Page in Get and with 404 status '); // send() is used to send the response 
// });

// app.post('/about',(req,res)=>{
//     res.send('This is About  Page in Post Format so Like it '); // send() is used to send the response 
// });
// app.get('/contact',(req,res)=>{
//     res.send('This is Contact Page'); // send() is used to send the response 
// });






// Listening to the port
app.listen(port,()=>{
    console.log(`Server running see carefully at http://127.0.0.1:${port}/`);
});
