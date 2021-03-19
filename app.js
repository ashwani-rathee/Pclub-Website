const express=require('express');
const expressLayouts=require('express-ejs-layouts');
const ejs=require('ejs');
const app=express();



app.set('view engine','ejs')

app.use( express.static( "public" ) );
//routes
app.use('/',require('./routes/index'));



const PORT=process.env.PORT||5000;
app.listen(PORT,console.log(`server started on port ${PORT}`));