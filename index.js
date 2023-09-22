// //Module FILE
// //Module file aynanbizni filelarimiz ichiga yoziladi va saqlangani uchun Modul FILE deyiladi

// const calculate = require('./hisob.js');

// const natija = calculate.kopaytirish(70, 20);
// console.log("Natija: ", natija);
// console.log("**************");

// const natija_2 = calculate.bolish(40, 20);
// console.log("Natija: ", natija_2);
// console.log("**************");

// const natija_3 = calculate.qoshish(77, 20);
// console.log("Natija: ", natija_3);
// console.log("**************");

// const natija_4 = calculate.ayrish(82, 20);
// console.log("Natija: ", natija_4);
// console.log("**************");

///////////////////////////////////////////////////////////
//Module Packege FILE
//accaunt nomli File Packegeni chaqirish

const Account = require("./account"); //accont.js fileda yaratgan module filelimizni module.exports = Account; bilan index.js file boglagan edik.
//endi bu fileni chaqirib olamiz va requirer qilamiz

Account.telMeAboutClass();
//Account.giveMeDetalis(); Bu orinda givMeDetalis methodini chaqirilsa crash beriladi
//chunki giveMeDetalis(); methodi statik emas u class ichida yaratilgan. telMeAboutClass(); methodi esa statik va classdan tashqarida  

console.log("*******************");

const myAccount = new Account("Doni", 205000, 1013011475124); //account modulefile dagi yaratgan contentlarimiz class ichiga qurilgani sabab
// uni new Account childini yaratib ulaymiz

myAccount.giveMeDetalis();

myAccount.makeDeposit(51000);

myAccount.withdrawMoney(3200);

// bugatti sotib olamiz 2,4 mln US$
myAccount.withdrawMoney(500000);

myAccount.withdrawMoney(235000) ;
myAccount.makeDeposit(20000);