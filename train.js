//Asingcriys Function

console.log("Jack Ma maslahatlari");
const list = ["Yaxshi talaba boling!", //0~20
"Togri boshliq tanlang va koproq xato qiling ! ", //20~30
"Ozingizga ishlashni boshlang !", //30~40
"Siz kuchli bolgan narsalarni qiling !",//40~50
"Yoshlarga invistitsya qiling!",//50~60
"Endi foydasi yoq !"//60~
];

// callBackni ham oz ornida ishlatamiz ayniqsa setInterval CoreModule dan foydalanganda callBack yaxshiroq boladi

async function maslahatBering(a) { //Bu orinda callBack yasaldiva u 2ta parametr oladi
    if (typeof a !== "number") throw new Error("Please insert only a number!");// agar a numberga teng bolmasa callback birinchi parametrni qaytarib 2-chi parametrda

    else if (a <= 20) return list[0];// bu yerda esa amal bajarilsa eror emas null qaytarib  listdagi 0- indexni qaytaradi
    else if (a > 20 && a <= 30) return list[1] ;
    else if (a > 30 && a <= 40) return list[2] ;
    else if (a > 40 && a <= 50) return list[3] ;
    else if (a > 50 && a <= 60) return list[4] ;
    else{    
        return new Promise((resolve, reject) => {//Promiseni kuchli tomoni uni chida CoreModullar ishlaydi
            setTimeout(() => { 
                resolve(list[5]);
            },5000);
        });
        // return list[5];//berdik lekin callback kutmasdan keyingi amallarga otib ketti va      
        //async functionda setTimeout kabi CoreModullar ishlamaydi.            
    }
}
                        //async functionni yordamida than/catch ni ornida
async function run() { // quydagi korinishda asyncris function orqali qisqa lekin samarali code yozdik
    let javob = await maslahatBering(22); //await => Kutish degani va javobni kutib olgandan keyin keyingi kodga 
    console.log(javob);                  //otadi 
    javob = await maslahatBering(31);
    console.log(javob);
    javob = await maslahatBering(61);
    console.log(javob);
}
run();
    // then/catch yoramida ishlash
    // console.log("I passed here 0");
    // maslahatBering(22)
    //     .then((data) => {
    //         ////
    //             maslahatBering(31) //Bu qismda avaliga 22 yoshni soragach ketidan 31 yoshni sorash uchun quyidagi qism .then dan keyin kiritildi
    //         .then((data) => {
    //                 maslahatBering(61)
    //             .then((data) => {
    //             console.log("javob:", data);
    //         })
    //         .catch((err) => { // catch(tutib olish): hatolikni ushlab bizga beradi
    //             console.log("ERROR", err);
    //         });
    //         console.log("I passed here 1");
    //         console.log("javob:", data);
    //     })
    //     .catch((err) => { // catch(tutib olish): hatolikni ushlab bizga beradi
    //         console.log("ERROR", err);
    //     });
    //     console.log("I passed here 1");
    //        ////
    //     console.log("javob:", data);
    // })
    // .catch((err) => { // catch(tutib olish): hatolikni ushlab bizga beradi
    //     console.log("ERROR", err);
    // });
    // console.log("I passed here 1");