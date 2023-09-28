console.log("web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const ser = express(); // bu yerda expressdan app nomli instens yasaldi
const http = require("http");

ser.use(express.satatic("public"));
ser.use(express.json());
ser.use(express.urlencoded({extended: true}));

ser.set("views", "views");
ser.set("views engine", "ejs");

ser.post("create-item", (req, res) => {
});

ser.get("/", function (req, res) {
    res.render("harid");
});

const server = http.createServer(ser); // Barcha sorovlar aynan shu yer(singilThread)ga keladi. 
let PORT = 5000;                      //Bu singilTreadni band qilmaslik uchun callback functiondan foydalaniladi
server.listen(PORT, function (){
    console.log(`The server is running on port: ${PORT}`);
});