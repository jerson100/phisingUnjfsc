if(process.env.NODE_ENV !== 'production') { // NODE_ENV=development
    // We are running in production mode
    require('dotenv').config();
} 

const express = require("express");
const path = require('path');

const app = express();

//configs
app.set('PORT', process.env.PORT || 3005);

//connect db
require('./config/database')();

//servir contenido estático
app.use(express.static(path.join(__dirname,'public')));

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));

//routes
app.use('/api/v1/users',require('./routers/user'));
app.get('/intranet',(req, res)=>{
    res.setHeader('Content-type',"text/html");
    res.status(200).sendFile('public/index.html',{root: __dirname});
});

app.listen(app.get('PORT'),()=>{
    console.log(`Servidor iniciado en el puerto ${app.get("PORT")}`);
});