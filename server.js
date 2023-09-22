//1 - missia => backend serverni qurishda NodeJS dagi => express framewor ki orqali qurdik
//2 - missia => Web serverni ichida frontendni qurish yani BSSR(BackendServerSiteRendiring)<= Backendda frontendni qurish



console.log("web Serverni boshlash");
const express = require("express");
const app = express(); // bu yerda expressdan app nomli instens yasaldi
const http = require("http");

//1 Kirish Code
//bu bosqichda Expressga kirib kelyotgan malumotlarga bogliq codelar yoziladi. 

app.use(express.static("public"));// bu harbir brauzerdan kirip kelyotkan sorovlar uchun public yani ochiq degani
app.use(express.json()); //express.json(); kirip kelyotkan json formatdagi malumotlarni jsondan object formatga ozgartirib berishini bildiradi
app.use(express.urlencoded ({extended: true})); // bu urlencoded html dagi form dan post qilingan narsalarni qabulqiladi agar bu yozilmasa ignore qiladi


//2 Session Code


//3 Views Code

app.set("views", "views"); //htmlni backendda qurilishi uchun view yasaladi va view engine "ejs " ekani korsatiladi.
app.set("view engine", "ejs"); // views folder ochiladi agar folder name ozgarsa < app.set("views", "views"); >bu yerda ham ozgartirish kerak boladi



//4 Routing Code keyingibosqichda rooterlar uchun

app.get("/", function (req, res){
    res.end(`<h1 style="background:red"> Hello World</h1>`);

});
app.get("/gift", function (req, res){
    res.end(`<h1 style="background:green"> Siz sovgalar bolimidasiz</h1>`);

});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on part : ${PORT}`);
});