

console.log("web Serverni boshlash");
const express = require("express");
const app = express(); // bu yerda expressdan app nomli instens yasaldi
const http = require("http");

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
    
    console.log(req.body); 
    res.json({test:"success"}); 

});

app.get('/', function(req, res){ 
    res.render("reja");
});

module.exports = app;