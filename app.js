const express=require('express');
const expressLayouts=require('express-ejs-layouts');
const ejs=require('ejs');
const app=express();



app.set('view engine','ejs')

app.use( express.static( "public" ) );
//routes
app.use('/',require('./routes/index'));
app.use('/home',require('./routes/index'));
app.use('/PSoC',require('./routes/index'));
app.use('/blogs',require('./routes/index'));
app.use('/resources',require('./routes/index'));
app.use('/about',require('./routes/index'));
app.use('/Projects',require('./routes/index'));
app.use('/ContactUs',require('./routes/index'));
app.use('/general',require('./routes/index'));
app.use('/CP',require('./routes/index'));
app.use('/ML',require('./routes/index'));
app.use('/DEV',require('./routes/index'));




const port=process.env.PORT||5000
 
app.listen(port,()=>{
    console.log(`listening to the port number at ${port}`);
})
