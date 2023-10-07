

console.log("web Serverni boshlash");
const express = require("express");
const app = express(); 

//Mongo DB ulash
//Mongo DB ni ulash 2 xil usulda amlga oshiriladi

// 1- usul togridan togri ulash
//2 - usul Mongus Packege orqali ulaish

//db nomli ozgaruvchi qabul qilib uni server.js dan malumo oldi

const db = require("../server").db(); // 
// const mongodb = require("mongodb");

app.use(express.static("public"));
app.use(express.json()); 
app.use(express.urlencoded ({extended: true})); 

app.set("views", "views"); //global seting sifatida frontendni backendda quryapmiz
app.set("view engine", "ejs"); //EJS orqali

//4 [R,o,u,t,i,n,g] Code keyingibosqichda rooterlar uchun

app.post("/create-item", (req, res) => { //post malumotni olib kelib dataBase ga yozadi. Postda req ni tarkibida body qismida malumot keladi; 
    console.log('user entered /create-item /');
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => { 
        res.json(data.ops[0]);
    });
});
    app.get('/', function(req, res) { 
        console.log('user entered /');
        db.collection("plans")
        .find()
        .toArray((err, data) => {  
        try{   
            console.log("data:", data);
            //res(response)ni turlari: res.json()/res.end()/res.render("EJS", data)
            res.render("reja", {items: data}); // response qil reja nomli ejs filedan datalarni items ga yuklagan holda
        }catch{                                     //items nomli object yasab datani unga yukladik 
            console.log(err);
            res.end("somthing went wrong");
        }
    });
});

module.exports = app;