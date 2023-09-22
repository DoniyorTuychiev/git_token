// NodeJS da 3 ta model bor:

// Model Peckage CORE

// setTimeout(function() { //settime out Packege oz ichiga 2 ta parametrni oladi 1- function. 2- time
//     console.log('ishga tushdi');
// }, 5000); // ikkinkchi parametrga loop bolish vaqti kiritiladi bu orinda har 5 secunda taimeni bildirip turadi

// setInterval(function(){
//     console.log('setInterval ishga tushudi');
// },1000);

// let number = 5;
// setInterval(() => {
//     console.log("hisob", number);
//     number++;
// }, 5000);

const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'utf8'); //utf8 pratocall
console.log(data);
console.log('***********');

fs.writeFileSync('./input.txt', `${data} \n\t\t by Doni`); //n yanagi satrga otish, /t esa Tab ni bildiradi
const new_data = fs.readFileSync("./input.txt", "utf8");
console.log(new_data);


// Module package EXTERNAL

// const moment = require('moment');

// setInterval(() => {
//     const time = moment().format('');
//     console.log(`hozirgi vaqt ${time}`);
// },5000);


// Inquerier Packeg


// const inquirer = require('inquirer'); //inquirer packege: terminaldan malum bir sorovga biz input orqali kiritgan qiymatimizni qabul qiliadi va hakozo...
// inquirer
// .prompt([{type: "input", name: "raqam", message: "raqamni kiriting?" }]) //prompt : 
// .then(answer => {
//     console.log("man kiritgan raqam qiymati: ", answer.raqam);
// })
// .catch((err) => console.log(err));

//////////// Validator

// const validator = require("validator");
// const test = validator.isEmail("foo@bar.com");// validator emailni email yoki yoq ligini tekshirib beryapti.
// // Validator har hil narsalarni tekshiradi Ex: .isInt; .isIP vahakozo
// console.log("test:", test);


//4- external packege <UUID>

// const { v4: uuidv4 } = require("uuid"); //uuid bizga takrorlanmas random stringlarni hosil qilib beradi Ex: random: c44809d5-cb6b-4a0e-adc7-2a874d70492b
// const random = uuidv4();
// console.log("random:", random); //Nodemn menda ishlamadi < shuni sorayman

// //Chalk
// // chalk contentga harhil bezaklar berishdshda ishlatiladi
// const chalk = require("chalk");
// const log =  console.log;

// log(chalk.blue("my random number is : ") + random + chalk.red(" !"));




// Module package FILE 