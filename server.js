//Asingcriys Function


console.log("web Serverni boshlash");
const express = require("express");
const app = express(); // bu yerda expressdan app nomli instens yasaldi
const http = require("http");


app.use(express.static("public"));// bu hamma kiruvchi clientlar uchun ochiq(public) folder bolib, bunda keyinchalik CSS filelar rasmlar saqlanadi 
app.use(express.json()); //express.json(); kirip kelyotkan json formatdagi malumotlarni express jsondan object formatga ozgartirib beradi
app.use(express.urlencoded ({extended: true})); // bu urlencoded html dagi form dan kirib kelyotkan 
//malumotlarni express qabulqiladi. Agar bu yozilmasa ignore qiladi

app.set("views", "views"); //htmlni backendda qurilishi uchun view yasaladi va view engine "ejs " ekani korsatiladi.
app.set("view engine", "ejs"); // views folder ochiladi agar folder name ozgarsa < app.set("views", "views"); >bu yerda ham ozgartirish kerak boladi

//4 Routing Code keyingibosqichda rooterlar uchun

app.post("/create-item", (req, res) => { //post malumotni olib kelib dataBase ga yozadi. Postda req ni tarkibida body qismida malumot keladi; 

    console.log(req.body); // kelgan narsani body qismini chiqarish
    res.json({test:"success"}); // res.json => bu json shaklda malumotni qaytarish funcini bajaradi ; req => require, res => response
});

 app.get("/", (req, res) =>{  //2
    res.render("harid");
 });

const server = http.createServer(app);
let PORT = 4000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on part : ${PORT}`);
});