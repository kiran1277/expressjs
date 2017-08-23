/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
var router = express.Router();

router.get("/speakers", function(req,res){

var data = req.app.get('appData');
var pagePhotos = [];
var pageSpeakers = data.speakers;
data.speakers.forEach(function(item){
    pagePhotos = pagePhotos.concat(item.artwork);
});

    res.render('speakers',{
        pageTitle:'Speakers',
        artwork: pagePhotos,
        speakers: pageSpeakers,
        pageID: 'speakerList'
    });
    /*var info = ' ';
    var dataFile = req.app.get('appData');
    dataFile.speakers.forEach(function(item){
        info += `
        <li>
            <h2>${item.name}</h2>
            <img src = "/images/speakers/${item.shortname}_tn.jpg" alt="speaker">
            <p>${item.summary}</p>
        </li>  
        `;
    });
    res.send(`
         <link rel="stylesheet" type="text/css" href = "css/style.css">
        <h1>Welcome from express</h1>
        ${info}
        <script src="/reload/reload.js"></script>
`);*/
        
});

router.get("/speakers/:speakerid", function(req,res){
    var data = req.app.get('appData');
    var pagePhotos = [];
    var pageSpeakers = [];
    data.speakers.forEach(function(item){
        if(item.shortname == req.params.speakerid){
        pageSpeakers.push(item);
        pagePhotos = pagePhotos.concat(item.artwork);
        }
    });

        res.render('speakers',{
            pageTitle:'Speakers Info',
            artwork: pagePhotos,
            speakers: pageSpeakers,
            pageID: 'speakerDetail'
        });


    /*var dataFile = req.app.get('appData');
    var speaker = dataFile.speakers[req.params.speakerid];
    res.send(`
         <link rel="stylesheet" type="text/css" href = "/css/style.css">
        <h1>${speaker.title}</h1>
        <h2>with ${speaker.name}</h2>
        <img src = "/images/speakers/${speaker.shortname}_tn.jpg" alt="speaker">
        <p>${speaker.summary}</p> 
        <script src="/reload/reload.js"></script>
`);*/
        
});

module.exports = router;
