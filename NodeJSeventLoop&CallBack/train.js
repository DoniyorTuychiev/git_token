//Backend Languages 2 turga bolinadi 
//1) SingleThread  => NodeJS SingleThread ga kiradi
//2) MultipleTread
//SingleThreadda no togri logika tashkillansa SingleThread boshqa kilientlarga javob bera olmasligi mumkin.
// Bunioldini olish uchun biz Asncriys Functionlardan foydalanamiz.
// Masalan: CallBack functioni shunday function va buni nilish shart

console.log("Jack Ma maslahatlari");
const list = ["Yaxshi talaba boling!", //0~20
"Togri boshliq tanlang va koproq xato qiling ! ", //20~30
"Ozingizga ishlashni boshlang !", //30~40
"Siz kuchli bolgan narsalarni qiling !",//40~50
"Yoshlarga invistitsya qiling!",//50~60
"Endi foydasi yoq !"//60~
];
 
function maslahatBering(a, callback) { //Bu orinda callBack yasaldiva u 2ta parametr oladi
    if (typeof a !== "number") callback("Please insert only a number!", null);// agar a numberga teng bolmasa callback birinchi parametrni qaytarib 2-chi parametrda
    //esa null yani hech qanday qiymat qaytarmaydi
    else if (a <= 20) callback(null, list[0]);// bu yerda esa amal bajarilsa eror emas null qaytarib  listdagi 0- indexni qaytaradi
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else{

        setTimeout(function() {  // bu yerda setTimeout orqali javobni 5 sekundan keyin ber deb buyruq
            callback(null, list[5]);//berdik lekin callback kutmasdan keyingi amallarga otib ketti va 
        }, 5000);                   //keyingi amallarni bajarib 5 sekund ichida. bizga javobni  berdi
    }

    confirm.log("I passed here 0")
    maslahatBering(27, (err, data) =>{
        if (err) console.log('EROR', err);
        console.log('javob:', data);
    });

    console.log("I passed here 1");
}
