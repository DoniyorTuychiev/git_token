//1 - missia => backend serverni qurishda NodeJS dagi => express framewor ki orqali qurdik
//2 - missia => Web serverni ichida frontendni qurish yani BSSR(BackendServerSiteRendiring)<= Backendda frontendni qurish
console.log("web Serverni boshlash");
const express = require("express");
const app = express(); // bu yerda expressdan app nomli instens yasaldi
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data)=>{
    if(err){
        console.log("ERROR:", err);
    }else{
        user = JSON.parse(data)
    }
});
//1 Kirish Code
//bu bosqichda Expressga kirib kelyotgan malumotlarga bogliq codelar yoziladi. 

app.use(express.static("public"));// bu hamma kiruvchi clientlar uchun ochiq(public) folder bolib, bunda keyinchalik CSS filelar rasmlar saqlanadi 
app.use(express.json()); //express.json(); kirip kelyotkan json formatdagi malumotlarni express jsondan object formatga ozgartirib beradi
app.use(express.urlencoded ({extended: true})); // bu urlencoded html dagi form dan kirib kelyotkan 
//malumotlarni express qabulqiladi. Agar bu yozilmasa ignore qiladi


//2 Session Code
//3 Views Code
app.set("views", "views"); //htmlni backendda qurilishi uchun view yasaladi va view engine "ejs " ekani korsatiladi.
app.set("view engine", "ejs"); // views folder ochiladi agar folder name ozgarsa < app.set("views", "views"); >bu yerda ham ozgartirish kerak boladi
//4 Routing Code keyingibosqichda rooterlar uchun
app.post("/create-item", (req, res) => { //post malumotni olib kelib dataBase ga yozadi. Postda req ni tarkibida body qismida malumot keladi; 
    //Request : 3 qisimdan iborat.
    // 1- URL qismi(starting line). yuqorida u "/create-item" ga tog'ri keladi
    // 2- qismi: bosh qismi(HTTP Rquest Headers) 
    // 3 - qismi: bu body qismi 
    console.log(req.body); // kelgan narsani body qismini chiqarish
    res.json({test:"success"}); // res.json => bu json shaklda malumotni qaytarish funcini bajaradi ; req => require, res => response
});

app.get('/', (req, res) => { ///person yozsam hatolik chiqdi / ni ozida esa yoq. sorayman 
    res.render("person", { user: user });
});



// app.get('/', function(req, res){ // get malumotni oqish uchun ishlatiladi
//     res.render("harid");//views ichiga yozilgan ejs file nomi aniq bu yerda yozilishi kerak chunki 22-qatorda biz views papkasi ichidagi ejs filega
//     //murojat qilishni jodeJS ga korsatgan edik. harid nomli frameWorkkiga bog'lanadi va frontend qismini ishka tushurib beradi
// });

const server = http.createServer(app);
let PORT = 4000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on part : ${PORT}, http://localhost:${PORT}`);
});

