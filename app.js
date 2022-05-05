//PART#1 - Point1, Changed main.js as app.js in package.json
const express = require('express'); 
const path = require ('path'); 
//PART#1 - Point2, Require the bodyparser module
const bodyParser = require('body-parser');
const cors = require('cors');


const nav =require('./src/data/nav');//Part#2 Point6, require nav module 
const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
// PART#1 - Point3 Changed homerouter path, homeroute to homerouter 
const homeRouter = require('./src/routes/homerouter');
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 

app.use(cors());  //Part#2 Point7, setup 'CORS' 
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{nav});
    
});




const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("Server Ready on 5000");  //PART#1 - Point5, Change 3000 to 5000
});