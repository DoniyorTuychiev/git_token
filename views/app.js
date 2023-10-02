

console.log("web Serverni boshlash");
const express = require("express");
const app = express(); 

//Mongo DB ulash
//Mongo DB ni ulash 2 xil usulda amlga oshiriladi

// 1- usul ogridan ogri ulash
//2 - usul Mongus Packege orqali ishlaish

//db nomli ozgaruvchi qabul qilib uni server.js dan malumo oldi

const db = require("../server").db(); // bu yerda / oldidan faqat bitta . (nuqta) qiyilsa bazan eror(not found './server') bolishi mumkin
                                     //shuning uchun / oldidan ..(2)ta qoyish orqali erorni bartaraf qilamiz

app.use(express.static("public"));
app.use(express.json()); 
app.use(express.urlencoded ({extended: true})); 

app.set("views", "views"); 
app.set("view engine", "ejs"); 

//4 Routing Code keyingibosqichda rooterlar uchun

app.post("/create-item", (req, res) => { //post malumotni olib kelib dataBase ga yozadi. Postda req ni tarkibida body qismida malumot keladi; 
    console.log('user entered create-item /');
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => { 
    try{
        res.end("successfuly added");
    }catch{
        console.log(err);
        res.end("somthing went wrong");
    }
    });
});

app.get('/', function(req, res) { 
    console.log('user entered /');
    db.collection("plans")
    .find()
    .toArray((err, data) => {       
        try{   
            console.log(data);
            res.render("reja", {items: data}); // ejs ga malumotlarni past qilish (DB dan qanday malumot olyotkanini korish)uchun aval 
        }catch{                                     //items nomli object yasab datani unga yukladik 
            console.log(err);
            res.end("somthing went wrong");
        }
    });
});

module.exports = app;