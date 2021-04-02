const express=require('express');
const router=express.Router();







router.get('/',(req,res)=>res.render('index.ejs'));
router.get('/home',(req,res)=>res.render('index.ejs'));
router.get('/about',(req,res)=>res.render('index.ejs'));
router.get('/Projects',(req,res)=>res.render('index.ejs'));
router.get('/ContactUs',(req,res)=>res.render('index.ejs'));
router.get('/Timeline',(req,res)=>res.render('index.ejs'));
router.get('/UpcomingEvents',(req,res)=>res.render('index.ejs'));
router.get('/blogs',(req,res)=>res.render("blogs.ejs"));
router.get('/ML',(req,res)=>res.render("ML.ejs"));
router.get('/CP',(req,res)=>res.render("CP.ejs"));
router.get('/blogs',(req,res)=>res.render("blogs.ejs"));
router.get('/general',(req,res)=>res.render("general.ejs"));
router.get('/DEV',(req,res)=>res.render("DEV.ejs"));

module.exports=router;