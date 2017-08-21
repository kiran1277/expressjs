/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
var router = express.Router();
router.get("/", function(req,res){
//    res.send(`
//        <link rel="stylesheet" type="text/css" href = "css/style.css">
//        <h1>Welcome to Express</h1>
//        <Img src="/images/misc/background.jpg" alt="background" style="hight: 300px"/>
//        <p>ExpressJs Meetups put together artists from all walks of life.</p>
//        <script src="/reload/reload.js"></script>
//        `);
var data = req.app.get('appData');
var pagePhotos = [];
data.speakers.forEach(function(item){
    pagePhotos = pagePhotos.concat(item.artwork);
});

    res.render('index',{
        pageTitle:'Home',
        artwork: pagePhotos,
        pageID: 'home'
    });
});

module.exports = router;

