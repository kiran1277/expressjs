/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
var router = express.Router();

router.get("/chat", function(req,res){
    res.render('chat',{
        pageTitle:'Chat',
        pageID: 'chat'
    });
});

module.exports = router;

